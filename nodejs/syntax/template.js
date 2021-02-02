// 줄 바꿈은 \n
var str1 = "aaa \nbbb \n ccc";
console.log(str1);

// 이게 지금까지의 방법.

var a = 1; // 얘는 정수형의 literal
var b = "1"; //얘는 문자형의 literal

console.log(`
`);
// ` 물결 그냥 키가 리터럴 지정자
var tmp = "good";
var str2 = `aaa ${tmp} 
ccc`;

console.log(str2);
