var nws = require('node-web-server');
// 起動 (__dirname を current directory として localhost:8080 で起動)
nws.run({
  host: "localhost",
  port: 8080,
  docRoot: "www"
}, __dirname);
console.log(__dirname);
// 10秒後に停止
// setTimeout(nws.stop, 10000);
