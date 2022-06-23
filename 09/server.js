const createApp = require("./app.js");

const app = createApp();

app.listen(3000, () => {
  console.log(`you are in port: http://localhost:3000`);
});
