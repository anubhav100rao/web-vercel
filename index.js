const express = require("express");
const app = express();

app.get("/", (req, res) => {
	return res.json({
		author: "Anubhav",
		message: "Welcome to our web server...",
	});
});

app.listen(3000, (req, res) => {
	console.log("Server started at localhost 3000");
});
