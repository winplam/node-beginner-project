var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
  var q = url.parse(req.url, true)
  switch (q.pathname) {
    case '/about':
    case '/contact-me':
      var filename = '.' + q.pathname + '.html'
      break
    case '/':
      var filename = './index.html'
      break
    default:
      var filename = './404.html'
  }
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return res.end('404 Not Found')
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(8080)
