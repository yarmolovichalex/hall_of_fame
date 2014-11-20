var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	app = express(),
	port = process.env.PORT || 3000;

	http.createServer(app).listen(port);
	console.log("Express is listening on port " + port);

	app.use(express.static(__dirname + '/'));

	var connectToRedis = function() {
		var vcap_services = process.env.VCAP_SERVICES;
		if (vcap_services) {
			var rediscloud_service = JSON.parse(vcap_services)["rediscloud"][0];
			var credentials = rediscloud_service.credentials;

			var client = redis.createClient(credentials.port, credentials.hostname, {no_ready_check: true});
			client.auth(credentials.password);
			return client;
		}
		else {
			return redis.createClient();
		}
	};

	app.get("/", function(req, res) {
		res.sendfile(__dirname + '/index.html');
	});

	app.get("/hello", function(req, res) {
		res.send("Hello World!");
	});