function a() {
  console.log("a");
}

// var Z = function () {
//   // 익명함수. 어떻게 호출? 값으로써 함수를 사용할 수 있다.
//   console.log("b");
// };

function slowfunc(callback) {
  callback();
}

slowfunc(a);
