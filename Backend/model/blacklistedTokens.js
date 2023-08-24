const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
});

const BlacklistedModel=mongoose.model("BlacklistedToken",blacklistedTokenSchema);
module.exports=BlacklistedModel;