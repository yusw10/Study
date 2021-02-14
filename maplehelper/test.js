var fs = require("fs");
var parseString = require("xml2js").parseString;

// fs.readFile("./soapResource/soap_getCharacterInfoByAccountId.xml", "utf-8", function (data, err) {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("@@@@");
// });

//xml값 변경 코드
fs.readFileSync("./soapResource/getCharacterInfoByAccountId.xml", "utf-8", function (err, data) {
  if (err) console.log(err);
  // we log out the readFile results
  //   console.log(data);
  // we then pass the data to our method here
  parseString(data, function (err, result) {
    if (err) console.log(err);
    fs.writeFileSync("./soapResource/getCharacterInfoByAccountId.xml", "utf-8", function (err) {
      console.log(result);
      result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountID"][0]["AccountID"][0] = 999;
      console.log(result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountID"][0]["AccountID"][0]);
    });
    // here we log the results of our xml string conversion
  });
});
console.log(__dirname.toString());
