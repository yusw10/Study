const { formatWithOptions } = require("util");

var member = ["egoing", "k8805", "hansuk"];
for (var i = 0; i < member.length; i++) {
  console.log(member[i]);
}

console.log();
var roles = {
  programmer: "egoing",
  designer: "k8805",
  manager: "hoya",
};

for (var name in roles) {
  console.log("object => " + name + " : " + roles[name]);
}
