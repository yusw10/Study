var xml2js = require("xml2js");
var fs = require("fs");

const xml = fs.readFileSync("../soapResource/GetCharacterInfoByAccountID.xml", "utf-8");
const builder = new xml2js.Builder();

var modifying_data = 999;

xml2js.parseString(xml, (err, result) => {
  //   console.log(result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountID"][0]["AccountID"][0]);
  result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountID"][0]["AccountID"][0] = modifying_data;
  //   console.log(result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountID"][0]["AccountID"][0]);
  data = builder.buildObject(result);
  fs.writeFileSync("../soapResource/GetCharacterInfoByAccountID.xml", data, function (err) {
    console.log("@@@1");
  });
});
