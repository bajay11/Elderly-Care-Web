


const jwt= require('jsonwebtoken');
const verifyJwtToken=(req,res,next)=>{
    const bearerToken=req.headers.authorization;
    // check whether bearerToken is valid or not
    if(bearerToken==undefined){
        //means he is not logged in abd trying to access private routes
        res.status(200).send({
            message:"unuthorized access"
        })
    }else{
        const Token=bearerToken.split(" ")[1];//bearer token consists of "bearer token" and i want only token
        //verify the token
        try{
            jwt.verify(Token,"xxxxxxx");
            next();
        }
        catch(err){
            next(new Error("session expired please relogin to continue"))
        }
    }

}
module.exports=verifyJwtToken;
