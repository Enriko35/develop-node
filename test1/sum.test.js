const sum = require("./sum.js");

test("adds 1 + 6 equal 7", () => {
  expect(sum(1, 6)).toBe(7);
});
