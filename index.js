const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3000, () => {
  console.log("listen 3000");
});
// app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.end(`
  <h1>Hello world</h1>
  `);
});
