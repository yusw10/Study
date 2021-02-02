var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
var template = require("./lib/template.js");
var path = require("path");
var sanitizeHtml = require("sanitize-html");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  console.log("queryData.id : " + queryData.id);
  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        var title = "Welcome!";
        var description = "hello node!";

        // var list = templateList(filelist);
        // var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
        // response.writeHead(200);
        // response.end(template);

        var list = template.list(filelist);
        var html = template.html(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        console.log(filelist);

        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description);
          var list = template.list(filelist);
          var html = template.html(
            sanitizedTitle,
            list,
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
            `<a href="/create">create</a>
             <a href="/update?id=${sanitizedTitle}">update</a>
             <form action="process_delete" method="post" onsubmit="Is right delete?">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
             </form>
               `
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      console.log(filelist);
      var title = "web-create";
      var list = template.list(filelist);
      var html = template.html(
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
      response.end(html);
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
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
        var title = filteredId;
        var list = template.list(filelist);
        console.log(title + " / " + description);
        var html = template.html(
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
        response.end(html);
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
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function (err) {
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
