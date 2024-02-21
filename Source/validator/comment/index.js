import Joi from "joi";

const CommentValidator = {
    create:(req,res,next)=>{
        const schema = Joi.object({
            comment:Joi.string().max(1000),
            username:Joi.string(),
            userid:Joi.number(),
            postid:Joi.number(),
        })

        const response =schema.validate();

        if(response.error){
            res.status(400).json({message:"Bad Data"})
        }
        next();
    }
}

export default CommentValidator;