import UserController from "../../Controllers/User/index.js";
import { Router } from "express";
import UserValidator from "../../validator/user/index.js";

const UserRouter = Router();

UserRouter.post('/postUser',UserValidator.create,UserController.create);
UserRouter.put('/updateUser/:userId',UserController.update);
UserRouter.get('/getUsers',UserController.getAll);
UserRouter.get('/getUser/:userid',UserController.getOne);
UserRouter.get('/user/follow',UserController.getOne);




export default UserRouter;