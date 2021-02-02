var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

function templateHTML(title, list, body, control) {
  return `
                <!doctype html>
              <html>
              <head>
                <title>${title}</title>
                <meta charset="utf-8">
              </head>
              <body>
                <h1><a href="/">WEB2</a></h1>
                ${list}
                ${control}
                ${body}
              </body>
              </html>
          `;
}
function templateList(filelist) {
  var list = "" + `<ul>`;
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + `</ul>`;
  return list;
}
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  console.log("queryData.id : " + queryData.id);
  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        console.log(filelist);
        var title = "Welcome!";
        var description = "hello node!";
        var list = templateList(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        console.log(filelist);
        var list = templateList(filelist);
        fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
          var title = queryData.id;
          var template = templateHTML(
            title,
            list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>
             <a href="/update?id=${title}">update</a>
             <form action="process_delete" method="post" onsubmit="Is right delete?">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
             </form>
               `
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      console.log(filelist);
      var title = "web-create";
      var list = templateList(filelist);
      var template = templateHTML(
        title,
        list,
        `
        <form action="/process_create" method="POST">
          <p><input type="text" name="title" placeholder="title"/></p>
          <p>
            <textarea name="description" placeholder="descripion"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>

      `,
        ``
      );
      response.writeHead(200);
      response.end(template);
    });
  } else if (pathname === "/process_create") {
    var body = "";
    request.on("data", function (data) {
      body = body + data; // 콜백 될 때 마다 추가한다.
    });
    // 웹 브라우저가 POST로 데이터 전송... 근데 너무 많으면 처리속도 down
    // POST로 보낼 때 많을경우를 대비해서 이런식을 제공함.
    //
    request.on("end", function () {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
      console.log(title + " : " + description);
    });
  } else if (pathname === "/update") {
    fs.readdir("./data", function (error, filelist) {
      console.log(filelist);

      fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
        var title = queryData.id;
        var list = templateList(filelist);
        console.log(title + " / " + description);
        var template = templateHTML(
          title,
          list,
          `
            <form action="/process_update" method="POST">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"/></p>
              <p>
                <textarea name="description" placeholder="descripion">${description}</textarea>
              </p>
              <p>
                <input type="submit" />
              </p>
            </form>
          `,
          `<a href="/create">create</a>
                <a href="/update">update</a>
               `
        );
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if (pathname === "/process_update") {
    var body = "";
    request.on("data", function (data) {
      body = body + data; // 콜백 될 때 마다 추가한다.
    });
    // 웹 브라우저가 POST로 데이터 전송... 근데 너무 많으면 처리속도 down
    // POST로 보낼 때 많을경우를 대비해서 이런식을 제공함.
    //
    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      console.log(post);
      fs.rename(`data/${id}`, `data/${title}`, function (err) {
        console.log(id + " => " + title);
        fs.writeFile(`data/${title}`, description, "utf8", function (err) {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end();
        });
      });

      // console.log(title + " : " + description);
    });
  } else if (pathname === "/process_delete") {
    var body = "";
    request.on("data", function (data) {
      body = body + data; // 콜백 될 때 마다 추가한다.
    });
    // 웹 브라우저가 POST로 데이터 전송... 근데 너무 많으면 처리속도 down
    // POST로 보낼 때 많을경우를 대비해서 이런식을 제공함.
    //
    request.on("end", function () {
      var post = qs.parse(body);
      var id = post.id;
      console.log(post);
      fs.unlink(`data/${id}`, function (err) {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
