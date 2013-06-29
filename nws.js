var nws = require('node-web-server');
nws.run({
  host: "localhost",
  port: 8080,
  docRoot: "htdocs"
}, __dirname);
