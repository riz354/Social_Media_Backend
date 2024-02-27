import UserRouter from "./User/index.js";
import { Router } from "express";
import postRouter from "./Post/index.js";
import commentRouter from "./Comment/index.js";
import AuthRouter from "./Auth/index.js";
import EmailRouter from "./Email/index.js";

const AllRouters = Router();

AllRouters.use(UserRouter);
AllRouters.use(postRouter);
AllRouters.use(commentRouter);
AllRouters.use(AuthRouter);
AllRouters.use(EmailRouter);



export default AllRouters;