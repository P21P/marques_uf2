#!/usr/bin/node
const  http = require("http");
const  mongo = require("mongodb").MongoClient;

let server_url = "mongodb://localhost:27017"

let todolist_db;

mongo.connect(server_url, (err, server) => {
	console.log("Dentro de MONGODB");
	todolist_db = server.db("todolist");
});
let public_files = new node_static.Server("public");
http.createServer( (request, response) => {
	response.setHeader("Acces-Control-Allow-Origin", "*");
	response.setHeader("Acces-Control-Request-Method", "*");
	response.setHeader("Acces-Control-Allow-Methods", "OPTIONS, GET, POST, HEAD, PUT");
	response.setHeader("Acces-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept, Authorization");
	if (request.method === "OPTIONS"={
		console.log("options");
		res.writeHEad(200);
		res.end();
		return;
	}

	if (request.url == "/submit"){
		console.log("submit");
		let body = [];
		request.on('data', chunk => {
			body.push(chunk);
		}).on('end', () => {
			let data = Buffer.concat(body).toString();
			console.log(data);
		});
		response.end();
		return;
	}
	public_files.serve(request,response);
}).listen(8081);
