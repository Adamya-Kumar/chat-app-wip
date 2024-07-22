const jwt=require('jsonwebtoken')
const User=require('../models/userModel');
const asyncHandler=require('express-async-handler');


const protect=asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer") ){
        try{
            //extracting token from headers
            token=req.headers.authorization.split(" ")[1];
            //decodeing process
            const decoded =jwt.verify(token,process.env.JWT_KEY);
            //find this in db
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }catch(error){
            res.status(401); 
            throw new Error("not authorized, token field");
        }
    }

    if(!token){
        res.token(401);
        throw new Error("No authorized ,No Token Found");
    }
})


module.exports={protect};