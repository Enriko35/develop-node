import { createServer } from "node:http";

const server = createServer((req, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>I created this page with Node.js!</h1></body></html>"
  );
});
server.listen(3000, () => {
  console.log(`server runnign at http://localhost:3000`);
});
