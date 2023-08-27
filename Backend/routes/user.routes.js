const express = require("express");
const UserModel = require("../model/Users");
const BlacklistedModel = require("../model/blacklistedTokens");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const userExist = await UserModel.findOne({ email });
		if (userExist) {
			return res.status(400).json({ msg: "User already exists, please login" });
		} else {
			bcrypt.hash(password, 5, async function (error, hash) {
				if (error) {
					return res.status(500).json({ msg: "Internal server error" });
				}
				const user = new UserModel({
					username,
					email,
					password: hash,
				});
				await user.save();
				res.status(200).json({ msg: "User registered" });
			});
		}
	} catch (error) {
		res.status(500).json({ msg: "Internal server error" });
	}
});
userRouter.get("/getUsers", async (req, res) => {
	try {
		const user = await UserModel.find();
		res.status(200).send({ data: user });
	} catch (error) {
		res.status(500).json({ msg: "Internal server error" });
	}
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "User does not exist, please register" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.KEY, {
        expiresIn: "7days",
      });
      res
        .status(200)
        .json({
          msg: "User logged in",
          token,
          username: user.username,
          email: user.email,
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/logout", async (req, res) => {
	try {
		const token = req.header("Authorization");
		jwt.verify(token, process.env.KEY, async (error, decode) => {
			if (error) {
				return res.status(400).json({ msg: "Invalid token" });
			}
			const isBlacklisted = await BlacklistedModel.findOne({ token });
			if (isBlacklisted) {
				return res.status(400).json({ msg: "Token blacklisted, login again" });
			} else {
				await BlacklistedModel.create({ token });
				return res.status(200).json({ msg: "Logged out" });
			}
		});
	} catch (error) {
		res.status(500).json({ msg: "Internal server error" });
	}
});

module.exports = userRouter;
