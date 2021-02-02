//1억줄 짜리 코드라면..?
var p = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1);
  },
  f2: function () {
    console.log(this.v2);
  },
};

function f1() {
  console.log(o.v1);
}
function f2() {
  console.log(o.v2);
}

p.f1();
p.f2();

var copyP = p;
copyP.v1 = "p1";
copyP.v2 = "p2";

copyP.f1();
p.f1();
