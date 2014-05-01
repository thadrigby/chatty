// this is how Jake Trent started the code.  he eventually moved to what is below this //

// var http = require('http')

// var server = http.createServer(function () {
// 	console.log('serving...')
// })

// server.listen(3000)



http = require('http');

var messages = [
	{message: 'Thad has a sweet hat'},
	{message: 'This is RAD'}
] // in memory, not database



// onRequest = function (req, res) {
// 	console.log('serving...')
// 	console.log(req.method)
// 	res.writeHead (200, {
// 		'Connection': 'close',
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*'
// 	});
// 	res.end(JSON.stringify(messages))
// 	// res.end('<h1>Hello World</h1>');
// }

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		// do the post thing
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			messages.push(JSON.parse(postData));
			
		res.writeHead (201, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});

		res.end(JSON.stringify(messages))	
		
		});
	} else if (req.method === 'GET') {
		// do the get thing
		res.writeHead (200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify(messages))
	}
})

server.listen(3000);









// //this is how Matt Meachum wrote it//


// var http = require('http');
// var port = 8888;

// onRequest = function(req, res) {
// 	res.writeHead(200, {
// 		'Connection': 'close',
// 		'Content-Type': 'text/html'
// 	});
// 	res.end('<h1>Hello World</h1>');
// };

// http.createServer(onRequest).listen(port);
// //this console.log helps to see that something is happening//
// console.log('Listening on port' + port);