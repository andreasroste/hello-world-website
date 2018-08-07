var http = require('http')
var app = require('express')()

app.get('/api', function (req,res) {
	res.status(200).json({
		api: 'yup'
	})
})

app.get('/:path', function (req,res) {
	res.status(200).sendFile(__dirname + '/index.html')
})

var server = http.createServer(app)
server.listen(process.env.PORT || 8000)
