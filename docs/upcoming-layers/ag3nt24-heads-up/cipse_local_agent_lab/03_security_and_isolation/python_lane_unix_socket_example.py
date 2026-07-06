from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import time
import hmac
import hashlib
import json

SOCKET_PATH = "/lab/ipc/python-lane.sock"
SHARED_SECRET = os.environ["PYTHON_LANE_SECRET"]

app = FastAPI()

class ExecuteRequest(BaseModel):
    token: dict
    module: str
    payload: dict

def verify_token(token: dict, payload: dict):
    sig = token["signature"]
    payload_hash = hashlib.sha256(
        json.dumps(payload, sort_keys=True).encode()
    ).hexdigest()

    if payload_hash != token["payload"]["payload_hash"]:
        raise HTTPException(status_code=403, detail="Payload hash mismatch")

    msg = json.dumps(token["payload"], sort_keys=True).encode()
    expected = hmac.new(
        SHARED_SECRET.encode(),
        msg,
        hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(sig, expected):
        raise HTTPException(status_code=403, detail="Invalid signature")

    now = int(time.time())
    if token["payload"]["exp"] < now:
        raise HTTPException(status_code=403, detail="Token expired")

@app.post("/execute")
def execute(req: ExecuteRequest):
    verify_token(req.token, req.payload)

    if req.module == "semantic_grader":
        return {"ok": True, "module": req.module, "output": {"score": 0.91}}

    raise HTTPException(status_code=400, detail="Unknown module")
