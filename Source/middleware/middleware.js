import  Jwt  from "jsonwebtoken";

const AuthenticateMiddleware = async(req,res,next)=>{
    const headers = req.headers;

    let token = headers.authorization;
console.log(token)
    token = token.split(" ");

    token = token[1];

    try{
        const userData = Jwt.verify(token, 'sdccsdcw');

        console.log(userData,"decode");
        req.user = userData;

    }catch(error){
        console.log(error,"error");

        return res.status(401).json({message:"Invald Token please try login again"})

    }

    next();

}

export default AuthenticateMiddleware;