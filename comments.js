// Create web server
var http = require('http');
var url = require('url');
var comments = [];

var server = http.createServer(function(request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	var path = url_parts.pathname;
	// console.log(url_parts);
	
	if (path === '/addComment') {
		var comment = query.comment;
		comments.push(comment);
		response.end(JSON.stringify(comments));
	} else if (path === '/getComments') {
		response.end(JSON.stringify(comments));
	} else {
		response.end('Invalid URL');
	}
});

server.listen(3000, function() {
	console.log('Server running on http://localhost:3000');
});