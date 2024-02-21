import commentController from "../../Controllers/comment/index.js";

import { Router } from "express";
import CommentValidator from "../../validator/comment/index.js";

const commentRouter = Router();

commentRouter.post('/postComment',CommentValidator.create,commentController.create);
commentRouter.put('/updateComment/:commentid',commentController.update);
commentRouter.get('/getComments',commentController.getAll);
commentRouter.get('/getComment/:commentid',commentController.getOne);





export default commentRouter;