const express = require("express");
const { connection } = require("./connection/db");
const userRouter = require("./routes/user.routes");
const bookRouter = require("./routes/books.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/books", bookRouter);
app.listen(process.env.PORT, async () => {
	try {
		await connection;
		console.log("Databased is connected to backend.");
		console.log(`App is listening on port ${process.env.PORT}`);
	} catch (err) {}
});
