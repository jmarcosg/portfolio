import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = process.cwd();
const workdir = mkdtempSync(join(tmpdir(), "audit-"));
const reportDir = join(root, "docs", "upgrade");
const reportPath = join(reportDir, "audit-report.json");

let exitCode = 0;

try {
  mkdirSync(reportDir, { recursive: true });
  cpSync(join(root, "package.json"), join(workdir, "package.json"));

  const installResult = spawnSync(
    "npm",
    ["install", "--package-lock-only", "--ignore-scripts", "--no-audit"],
    { cwd: workdir, stdio: "inherit" }
  );

  if (installResult.status !== 0) {
    exitCode = installResult.status ?? 1;
  } else {
    const auditResult = spawnSync("npm", ["audit", "--json"], {
      cwd: workdir,
      encoding: "utf8",
    });

    const auditOutput = auditResult.stdout || auditResult.stderr || "";

    let auditJson;
    try {
      auditJson = JSON.parse(auditOutput);
    } catch (error) {
      console.error("Failed to parse npm audit JSON output.");
      exitCode = 1;
    }

    if (exitCode === 0 && auditJson) {
      writeFileSync(reportPath, auditOutput);
      const severities = ["critical", "high", "moderate", "low", "info"];
      const direct = Object.fromEntries(severities.map((level) => [level, 0]));
      const transitive = Object.fromEntries(severities.map((level) => [level, 0]));
      let runtimeHighCritical = 0;

      if (auditJson.vulnerabilities) {
        for (const vuln of Object.values(auditJson.vulnerabilities)) {
          const severity = severities.includes(vuln.severity)
            ? vuln.severity
            : "info";
          const isDirect = Boolean(vuln.isDirect);
          const isDev = Boolean(vuln.isDevDependency);

          if (isDirect) {
            direct[severity] += 1;
          } else {
            transitive[severity] += 1;
          }

          if (!isDev && (severity === "critical" || severity === "high")) {
            runtimeHighCritical += 1;
          }
        }
      } else if (auditJson.advisories) {
        for (const advisory of Object.values(auditJson.advisories)) {
          const severity = severities.includes(advisory.severity)
            ? advisory.severity
            : "info";
          const findings = advisory.findings || [];

          for (const finding of findings) {
            const isDev = Boolean(finding.dev);

            if (advisory.module_name && finding.paths?.length) {
              if (
                finding.paths.some((path) =>
                  path.startsWith(advisory.module_name)
                )
              ) {
                direct[severity] += 1;
              } else {
                transitive[severity] += 1;
              }
            } else {
              transitive[severity] += 1;
            }

            if (!isDev && (severity === "critical" || severity === "high")) {
              runtimeHighCritical += 1;
            }
          }
        }
      }

      console.log(`Audit report saved to ${reportPath}`);
      console.log("Direct vulnerabilities:", direct);
      console.log("Transitive vulnerabilities:", transitive);

      if (runtimeHighCritical > 0) {
        console.error(
          `Blocking: ${runtimeHighCritical} critical/high runtime vulnerabilities found.`
        );
        exitCode = 1;
      } else if (auditResult.status && auditResult.status !== 0) {
        exitCode = auditResult.status;
      }
    }
  }
} finally {
  rmSync(workdir, { recursive: true, force: true });
  if (exitCode !== 0) {
    process.exit(exitCode);
  }
}
