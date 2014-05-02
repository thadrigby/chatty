var express = require('express')
// important note: express4 doesnt include this middleware and it needs npm installed seperately
var bodyParser = require('body-parser')

var app = express()


// middle ware

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','*')
	next()
})
app.use(bodyParser())

var messages = [
	{message: 'I have a sweet hat'},
	{message: 'This is RAD'}
]

// you can have lots of these...
app.get('/', function(req, res) {
	res.json(200, messages)
})


app.post('/', function(req, res) {
	var message = req.body
	messages.push(message)
	res.json(201, messages)
})


app.listen(3000, function() {
	console.log('I am listening')
})


// // this is how Jake Trent started the code.  he eventually moved to what is below this //

// // var http = require('http')

// // var server = http.createServer(function () {
// // 	console.log('serving...')
// // })

// // server.listen(3000)



// http = require('http');

// var messages = [
// 	{message: 'Thad has a sweet hat'},
// 	{message: 'This is RAD'}
// ] // in memory, not database

// var server = http.createServer(function(req, res) {
// 	if (req.method === 'POST') {
// 		// do the post thing
// 		var postData = '';
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});
// 		req.on('end', function() {
// 			messages.push(JSON.parse(postData));
			
// 		res.writeHead (201, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		});

// 		res.end(JSON.stringify(messages))	
		
// 		});
// 	} else if (req.method === 'GET') {
// 		// do the get thing
// 		res.writeHead (200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		});
// 		res.end(JSON.stringify(messages))
// 	}
// })

// server.listen(3000);









// // //this is how Matt Meachum wrote it//


// // var http = require('http');
// // var port = 8888;

// // onRequest = function(req, res) {
// // 	res.writeHead(200, {
// // 		'Connection': 'close',
// // 		'Content-Type': 'text/html'
// // 	});
// // 	res.end('<h1>Hello World</h1>');
// // };

// // http.createServer(onRequest).listen(port);
// // //this console.log helps to see that something is happening//
// // console.log('Listening on port' + port);