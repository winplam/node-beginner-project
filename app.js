var express = require('express')
var app = express()
var port = 8080

app.get('/', (req, res) => {res.sendFile(__dirname + '/index.html')})
app.get('/about', (req, res) => {res.sendFile(__dirname + '/about.html')})
app.get('/contact-me', (req, res) => {res.sendFile(__dirname + '/contact-me.html')})
// app.use(express.static(__dirname, { index: './index.html' }))
// app.use('/about', express.static('./about.html'))
// app.use('/contact-me', express.static('./contact-me.html'))

app.listen(port, function () {
  console.log('Example app listening on http://localhost:' + port)
})
