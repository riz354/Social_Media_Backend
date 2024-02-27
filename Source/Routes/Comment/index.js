import commentController from "../../Controllers/comment/index.js";

import { Router } from "express";
import CommentValidator from "../../validator/comment/index.js";
import AuthenticateMiddleware from "../../middleware/middleware.js";

const commentRouter = Router();

commentRouter.post('/postComment',CommentValidator.create,AuthenticateMiddleware,commentController.create);
commentRouter.put('/updateComment/:commentid',AuthenticateMiddleware,commentController.update);
commentRouter.get('/getComments',AuthenticateMiddleware,commentController.getAll);
commentRouter.get('/getComment/:commentid',AuthenticateMiddleware,commentController.getOne);

commentRouter.get('/UserComments',AuthenticateMiddleware,commentController.onlyUsers);






export default commentRouter;