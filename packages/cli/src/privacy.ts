const PRIVACY_NOTICE_LINES = [
  "claude-doctor privacy & security",
  "",
  "• No runtime telemetry: this CLI does not send your transcript data to external services.",
  "• Local processing only: analysis runs against files on your machine (for example ~/.claude/).",
  "• Local writes only: --save writes model files to .claude-doctor/ in your local project.",
  "• No remote execution: the CLI does not execute downloaded code from the network.",
  "",
  "Note: development tooling (like Turborepo when running repo scripts) may show its own telemetry notice.",
  "That is separate from the published claude-doctor CLI runtime behavior.",
] as const;

export const formatPrivacyNotice = () => PRIVACY_NOTICE_LINES.join("\n");
