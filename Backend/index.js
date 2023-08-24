const express = require("express");
const { connection } = require("./connection/db");

require("dotenv").config();
const app = express();

app.listen(process.env.PORT, async () => {
	try {
		await connection;
		console.log("Databased is connected to backend.");
		console.log(`App is listening on port ${process.env.PORT}`);
	} catch (err) {}
});
