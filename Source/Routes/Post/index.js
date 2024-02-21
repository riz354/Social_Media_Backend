import PostController from "../../Controllers/Post/index.js";
import { Router } from "express";
import PostValidator from "../../validator/post/index.js";

const postRouter = Router();

postRouter.post('/post',PostValidator.create,PostController.create);
postRouter.put('/updatePost/:postId',PostController.update);
postRouter.get('/getPosts',PostController.getAll);
postRouter.get('/getPost/:postid',PostController.getOne);





export default postRouter;