import PostController from "../../Controllers/Post/index.js";
import { Router } from "express";
import PostValidator from "../../validator/post/index.js";
import AuthenticateMiddleware from "../../middleware/middleware.js";

const postRouter = Router();

postRouter.post('/post',PostValidator.create,AuthenticateMiddleware,PostController.create);
postRouter.put('/updatePost/:postId',PostController.update);
postRouter.get('/getPosts',AuthenticateMiddleware,PostController.getAll);
postRouter.get('/getPost/:postid',PostController.getOne);





export default postRouter;