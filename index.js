const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(400, {"Content-Type": "text/plain"});
    response.end("Hello World! qsdfqsdfqsdfqsdf qsdfThis is the Oikonomika HR application IN THE CLOUD");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
