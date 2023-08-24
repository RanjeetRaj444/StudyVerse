const jwt =require("jsonwebtoken");
const BlacklistedModel=require("../model/blacklistedTokens");

const authMiddleware=async (req,res,next)=>{
    try {
        const token=req.header("Authorization");
        if(!token){
            return res.status(400).json({msg:"Token not found, please login"});
        }
        else{
        const isBlacklisted=await  BlacklistedModel.findOne({token});
        if(isBlacklisted){
            return res.status(400).json({msg:"Token blacklisted, login again"});
        }
        const decode =jwt.verify(token,process.env.KEY);
        req.user=decode.userId;
        next();
    }
       
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
};


module.exports=authMiddleware;