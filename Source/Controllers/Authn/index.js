import UserModel from "../../Models/user/index.js";
import  Jwt  from "jsonwebtoken";



const AuthController ={
    login:async(req,res)=>{

        const payload = req.body;
        const user = await UserModel.findOne(
            {where:{email:payload.email,password:payload.password}}
        );

        if(!user){
           return res.status(401).json({meassage:"Invalid credentials"})
        }

        const token = Jwt.sign({
          name : user.name,
           email : user.password,
           exp: Math.floor(Date.now() / 1000) + (60 * 60),
          }, 'sdccsdcw');


          res.json({
            message:"login successfully",
            token,
          })

    }
}
   

export default AuthController;