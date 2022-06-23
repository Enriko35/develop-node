const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-type", "application/json");

  expect(response.body).toEqual({ location: "Mars" });
});
