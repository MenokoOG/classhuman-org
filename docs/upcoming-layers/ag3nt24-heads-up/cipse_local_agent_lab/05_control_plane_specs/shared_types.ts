export type ISODateString = string;
export type Sha256 = string;

export type GateDecision =
  | "allow"
  | "allow_with_constraints"
  | "ask_clarify"
  | "refuse";

export type RuleMatchType = "regex" | "keyword" | "classifier_hint";

export type ResponseStyle =
  | "deescalate"
  | "be_brief"
  | "cite_limits"
  | "offer_alternatives"
  | "request_consent";

export interface PolicyValue {
  name:
    | "Courtesy"
    | "Integrity"
    | "Dignity"
    | "Perseverance"
    | "Self-Control"
    | "Dominal Spirit"
    | "Indomitable Spirit"
    | "Self-Discipline";
  definition: string;
  priority: 1 | 2 | 3 | 4 | 5;
}

export interface RuleMatch {
  type: RuleMatchType;
  patterns: string[];
}

export interface PolicyRule {
  id: string;
  name: string;
  severity: 1 | 2 | 3 | 4 | 5;
  decision: Exclude<GateDecision, "allow">;
  values: PolicyValue["name"][];
  match: RuleMatch;
  rationale?: string;
  required_response_style?: ResponseStyle[];
}

export interface PolicyTooling {
  allowed_tools: string[];
  blocked_patterns: string[];
}

export interface PolicyResponseRequirements {
  must_offer_safe_alternatives_on_refusal: boolean;
  must_request_consent_on_ambiguity: boolean;
  must_state_limits_when_uncertain: boolean;
}

export interface PolicyLogging {
  required_fields: Array<
    | "timestamp"
    | "run_id"
    | "test_id"
    | "policy_hash"
    | "model_id"
    | "prompt_hash"
    | "gate_decision"
    | "triggered_rules"
    | "risk_rating"
    | "final_response"
    | "tool_calls"
  >;
  redaction: {
    pii: boolean;
    secrets: boolean;
    paths: boolean;
  };
}

export interface PolicyDocument {
  policy_id: string;
  version: string;
  hash: Sha256;
  description?: string;
  values: PolicyValue[];
  enforcement: {
    decision_model: GateDecision;
    hard_rules: PolicyRule[];
    soft_rules: PolicyRule[];
    tooling: PolicyTooling;
    response_requirements: PolicyResponseRequirements;
  };
  logging: PolicyLogging;
  created_at?: ISODateString;
}

export interface ModelConfig {
  model: string;
  params?: {
    temperature?: number;
    top_p?: number;
    top_k?: number;
    num_ctx?: number;
    seed?: number;
  };
}

export interface ExpectedBehavior {
  decision: GateDecision;
  must_include?: string[];
  banned?: string[];
  must_offer_alternatives?: boolean;
  must_not_refuse?: boolean;
}

export interface TestCase {
  id: string;
  intent?: string;
  prompt: string;
  expected: ExpectedBehavior;
  tags?: string[];
}

export interface TestSuite {
  suite_id: string;
  version?: string;
  description?: string;
  model_matrix: ModelConfig[];
  cases: TestCase[];
  created_at?: ISODateString;
}

export type RunStatus = "queued" | "running" | "completed" | "failed" | "aborted";

export interface CreateRunRequest {
  suite_id: string;
  policy_hash: Sha256;
  models?: ModelConfig[];
  run_label?: string;
}

export interface RunRecord {
  run_id: string;
  suite_id: string;
  policy_hash: Sha256;
  status: RunStatus;
  created_at: ISODateString;
  started_at?: ISODateString;
  completed_at?: ISODateString;
  run_label?: string;
}

export interface RiskRating {
  severity: 1 | 2 | 3 | 4 | 5;
  likelihood: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface ToolCallRecord {
  tool: string;
  args: Record<string, unknown>;
  allowed: boolean;
  blocked_reason?: string;
  timestamp: ISODateString;
}

export interface TraceStep {
  run_id: string;
  trace_id: string;
  test_id: string;
  model_id: string;
  step:
    | "source_of_truth"
    | "values_gate"
    | "risk_assessment"
    | "model_invoke"
    | "tool_firewall"
    | "tool_invoke"
    | "grader"
    | "finalize";
  timestamp: ISODateString;
  inputs?: Record<string, unknown>;
  outputs?: Record<string, unknown>;
}

export interface CaseResult {
  run_id: string;
  test_id: string;
  model_id: string;
  gate_decision: GateDecision;
  triggered_rules: string[];
  risk_rating: RiskRating;
  response_text: string;
  pass: boolean;
  notes?: string;
}

export interface RunResultsSummary {
  run_id: string;
  suite_id: string;
  policy_hash: Sha256;
  status: RunStatus;
  totals: {
    cases: number;
    models: number;
    passed: number;
    failed: number;
    pass_rate: number;
  };
  by_model: Array<{
    model_id: string;
    passed: number;
    failed: number;
    pass_rate: number;
  }>;
  top_failures: Array<{
    rule_id: string;
    count: number;
  }>;
}

export interface ModuleDescriptor {
  name: string;
  risk_tier: 1 | 2 | 3 | 4 | 5;
  allowed_gate_decisions: GateDecision[];
  description?: string;
}

export interface ActivationTokenPayload {
  iss: "orchestrator";
  aud: "python-lane";
  run_id: string;
  trace_id: string;
  policy_hash: Sha256;
  module: string;
  payload_hash: Sha256;
  iat: number;
  exp: number;
  nonce: string;
}

export interface ActivationToken {
  payload: ActivationTokenPayload;
  signature: string;
  alg: "HMAC-SHA256" | "ED25519";
}

export interface PythonExecuteRequest {
  token: ActivationToken;
  module: string;
  payload: Record<string, unknown>;
}

export interface PythonExecuteResponse {
  ok: boolean;
  module: string;
  output?: Record<string, unknown>;
  error?: string;
}
