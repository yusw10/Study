const request = require("request");
const cheerio = require("cheerio");

const maple_url = "https://maplestory.nexon.com/Ranking/World/Guild?n=";
const guild_name = "마음";
const url = maple_url + guild_name;
console.log(url);
console.log(encodeURI(url));

guild = {
  guild_name: "",
  master: "",
};

https: request(encodeURI(url), (error, response, body) => {
  if (error) {
    console.log(error);
  }

  let $ = cheerio.load(body);
  var guild_list = $(".rank_table2 tbody tr .left");
  for (var i = 0; i < guild_list.length; i++) {
    console.log(guild_list.children(i));
  }
});

//maplestory.nexon.com/Ranking/World/Guild?n=마음
// const url = "http://www.inu.ac.kr/com/cop/mainWork/foodList1.do?siteId=inu&id=inu_050110010000&command=week";
// https: request(url, (error, response, body) => {
//   if (error) throw error;

//   let $ = cheerio.load(body);

//   try {
//     let krDay = "";
//     let corner = "";
//     let menu = "";

//     $("table")
//       .find("tr")
//       .each(function (index, elem) {
//         if (index % 6 === 0) {
//           krDay = $(this).find("th").text().trim();

//           console.log(`${krDay}`);
//         } else {
//           corner = $(this).find("th").text().trim();
//           menu = $(this).find("th").next().text().trim();

//           //console.log(`${corner} -> ${menu}`);
//         }
//       });
//   } catch (error) {
//     console.error(error);
//   }
// });
