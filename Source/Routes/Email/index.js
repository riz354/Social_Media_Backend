import  Router  from "express";
import main from "../../Controllers/Email/index.js";
import AuthenticateMiddleware from "../../middleware/middleware.js";

const EmailRouter = Router();

EmailRouter.post('/sendEmail',AuthenticateMiddleware,main)

export default EmailRouter;