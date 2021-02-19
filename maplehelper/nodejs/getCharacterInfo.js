const soapRequest = require("easy-soap-request");
const fs = require("fs");
const parseString = require("xml2js").parseString;

// example data
const url = "http://api.maplestory.nexon.com/soap/maplestory.asmx?wsdl";
const sampleHeaders = {
  "Content-Type": "text/xml; charset=UTF-8",
  //"Content-Length": xml.length,
  soapAction: "http://gnxsoap.nexon.com/soap/GetCharacterInfoByAccountID",
};
const xml = fs.readFileSync("../soapResource/GetCharacterInfoByAccountID.xml", "utf-8");
// usage of module
(async () => {
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  //   console.log(headers);
  //console.log(body);
  //   console.log(statusCode);

  parseString(body, function (err, result) {
    if (err) console.log(err);
    console.log(
      result["soap:Envelope"]["soap:Body"][0]["GetCharacterInfoByAccountIDResponse"][0]["GetCharacterInfoByAccountIDResult"][0]["diffgr:diffgram"][0][
        "NewDataSet"
      ][0]["UserInfo"]
    );
  });
})();
