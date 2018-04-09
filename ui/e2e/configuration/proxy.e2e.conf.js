 const argv = require('minimist')(process.argv.slice(1));

var port;
if (argv.proxy && argv.proxy.conf && argv.proxy.conf.port) {
  port = argv.proxy.conf.port;
} else {
  port = 3000;
}

const PROXY_CONFIG = [
  {
    context: [
      "/ngapimock/**",
      "/api/**"
    ],
    target: "http://localhost:" + port,
    secure: false,
    logLevel : "debug"
  }
]

module.exports = PROXY_CONFIG;
