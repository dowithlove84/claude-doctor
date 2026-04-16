import { describe, it, expect } from "vite-plus/test";
import { formatPrivacyNotice } from "../src/privacy.js";

describe("formatPrivacyNotice", () => {
  it("documents local-only processing and no runtime telemetry", () => {
    const notice = formatPrivacyNotice();
    expect(notice).toContain("No runtime telemetry");
    expect(notice).toContain("Local processing only");
    expect(notice).toContain("Local writes only");
  });
});
