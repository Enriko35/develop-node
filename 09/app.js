const { createServer } = require("node:http");

function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<html><body><h1>Benvenuti nel world wide web!</h1></body></html>");
  });
}
module.exports = createApp;
