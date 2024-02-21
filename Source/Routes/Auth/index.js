import  Express  from "express";
import { Router } from "express";
 const AuthRouter = Router();
 import AuthController from "../../Controllers/Authn/index.js";

 AuthRouter.post('/login',AuthController.login)


 export default AuthRouter;