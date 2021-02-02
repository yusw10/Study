const express = require("express");

const app = express();

const server = app.listen(3000, () => {
  console.log("Start server : Local host: 3000");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); // embedded javascript template
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/about", function (req, res) {
  res.send("about page");
});
