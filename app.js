const express = require('express')
const app = express();

const path = require("path");
const port = 8000;
// localhost:8000 또는 127.0.0.1:8000
// localhost === 127.0.0.1
app.listen(port, () => {
  console.log("start port ? ", port);
});

app.use(express.static("app")); // 스테틱 디렉토리(app)를 express에 static으로 등록한다.

app.get("/", (req, res) => {
  res.send("<h1>hi friend!!</h1>");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "../app", "index.html"));
  //   __dirname : 바로 현재 위치를 가리키는 Node.js의 전역 변수
  // __filename : 현재 파일 이름
});

