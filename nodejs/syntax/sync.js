var fs = require("fs");

console.log("A");
var callback = "123";
fs.readFile("./sample.txt", "utf-8", function (err, result) {
  callback = result;
});
console.log(callback);
console.log("C");
