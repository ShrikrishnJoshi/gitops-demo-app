const test = require("node:test");
const assert = require("node:assert/strict");

test("application returns the expected response", async () => {
    const response = {
        application: "gitops-demo-app",
        version: "1.0.0",
        message: "Hello from Jenkins and Argo CD GitOps!"
    };

    assert.equal(response.application, "gitops-demo-app");
    assert.equal(response.version, "1.0.0");
    assert.ok(response.message.includes("GitOps"));
});