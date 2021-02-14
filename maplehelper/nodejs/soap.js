/*
POST /soap/maplestory.asmx HTTP/1.1
Host: api.maplestory.nexon.com
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://gnxsoap.nexon.com/soap/GetCharacterInfoByAccountID"

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetCharacterInfoByAccountID xmlns="http://gnxsoap.nexon.com/soap/">
      <AccountID>int</AccountID>
    </GetCharacterInfoByAccountID>
  </soap:Body>
</soap:Envelope>
*/
var soap = require("soap");
var url = "http://api.maplestory.nexon.com/soap/maplestory.asmx?wsdl";
var args = { AccountID: "18948432" };
soap
  .createClientAsync(url)
  .then((client) => {
    return client.MyFunctionAsync(args);
  })
  .then((result) => {
    console.log(result);
  });

console.log(__dirname.toString);
