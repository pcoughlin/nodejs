var http = require("http")
var url = require("url");

function start(route, handle) {
	function onRequest(request, response){
		console.log("request url : ", request.url);
		var pathname = url.parse(request.url).pathname;
		console.log("Request for ", pathname, "recieved.");
		
		route(handle, pathname, response);
	}		


http.createServer(onRequest).listen(8888);
console.log("Server has started on port", 8888);
}

exports.start = start;
