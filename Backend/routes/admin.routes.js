const express=require("express");
const AdminModel=require("../model/Admin");
const UserModel=require("../model/Users");
const BlacklistedModel=require("../model/blacklistedTokens");
const bcrypt=require("bcrypt");
require("dotenv").config();
const jwt=require("jsonwebtoken");
const adminRouter=express.Router();

adminRouter.post("/register",async (req,res)=>{
    const {username,email,password,}=req.body;
    const userExist= await AdminModel.findOne({email});
    if(userExist){
        return res.status(400).send("User already exist, please login")
    }
    else{
        bcrypt.hash(password,5,async function (error,hash){
           const user=new AdminModel({
            username,email,password:hash
           });
           await user.save();
           res.status(200).send("User registered");
        });
    }
});
adminRouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await AdminModel.findOne({email});
        if(!user){
            return res.status(400).send("User does not exist, please register")
        }
        else{
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
        res.status(400).json({msg:"Inccorect password"})
        }
        const token=jwt.sign({userId:user._id},process.env.KEY,{expiresIn:"7days"});
        res.status(200).json({msg:"User logedin",token})
        }
    } catch (error) {
        res.status(400).json({msg:error})
    }
});


adminRouter.post("/logout", async(req,res)=>{
    try {
        const token=req.header("Authorization");
        jwt.verify(token,process.env.KEY,async(error,decode)=>{
            if(error){
                return res.status(400).json({msg:"Invalid token"})
            };
            const isBlacklisted=await  BlacklistedModel.findOne({token});
            if(isBlacklisted){
                return res.status(400).json({msg:"Token blacklisted, login again"});
            }
            else{
                await BlacklistedModel.create({token});
               return res.status(200).json({msg:"Logedout"})
            }
        })
    } catch (error) {
        res.status(400).json({msg:"Something went wrong"})
    }
});

adminRouter.get("/viewadmins", async (req, res) => {
    try {
        const admins = await AdminModel.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" });
    }
});


adminRouter.get("/viewusers", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" });
    }
});



module.exports=adminRouter;