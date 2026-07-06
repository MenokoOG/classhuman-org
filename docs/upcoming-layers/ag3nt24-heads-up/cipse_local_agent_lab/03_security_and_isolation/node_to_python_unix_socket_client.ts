import { request } from "undici";

export async function callPythonLane(payload: unknown) {
  const res = await request("http://unix/execute", {
    socketPath: "/lab/ipc/python-lane.sock",
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });

  return await res.body.json();
}
