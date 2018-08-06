var http = require('http')
var app = require('express')()

app.get('/', function (req,res) {
	res.status(200).sendFile(__dirname + '/index.html')
})

var server = http.createServer(app)
server.listen(80)
