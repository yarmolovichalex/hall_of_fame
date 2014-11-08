var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	app = express(),
	port = process.env.PORT || 3000;

	http.createServer(app).listen(port);
	console.log("Express is listening on port " + port);

	app.use(express.static(__dirname + '/'));

	app.get("/", function(req, res) {
		res.sendfile(__dirname + '/index.html');
	})
	app.get("/hello", function(req, res) {
		res.send("Hello World!");
	});
	app.get("/goodbye", function(req, res) {
		res.send("Goodbye World!");

	client = redis.createClient();
	client.set("string key", "string val", redis.print);
});