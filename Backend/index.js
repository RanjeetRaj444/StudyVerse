const express = require("express");
const { connection } = require("./connection/db");

const userRouter = require("./routes/user.routes");
const adminRouter = require("./routes/admin.routes");
require("dotenv").config();
const cors = require("cors");
const bookRouter = require("./routes/books.routes");
const { userBooksRouter } = require("./routes/userbooks");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to home page");
});

app.use("/subjects", userBooksRouter);

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.use("/books", bookRouter);

app.use((req, res, next) => {
	res.status(404).send("Invalid route");
	next();
});

app.listen(process.env.PORT, async () => {
	try {
		await connection;
		console.log("Databased is connected to backend.");
		console.log(`App is listening on port ${process.env.PORT}`);
	} catch (err) {}
});
