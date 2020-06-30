console.log("hi");
const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3000, () => {
  console.log("listen 3000");
});
// fs.open("db.json", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });

app.use(express.static("./"));
