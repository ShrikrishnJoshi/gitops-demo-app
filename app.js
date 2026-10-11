const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "1.0.0";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
        application: "gitops-demo-app",
        version: VERSION,
        message: "Hello from Jenkins and Argo CD GitOps!"
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`App listening on port ${PORT}, version ${VERSION}`);
});

module.exports = { server };