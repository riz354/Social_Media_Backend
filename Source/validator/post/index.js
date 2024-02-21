import Joi from "joi";

const PostValidator = {
    create:  (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string()
                .min(3)
                .max(100)
                .required(),

            description: Joi.string()
                .max(1000),
                
            userid: Joi.number()
                .integer()
                .min(1)
                .max(2013),

           
        })
        
           const response =  schema.validate(req.body);
        //    console.log(response)

        if(response.error){
            // console.log(error)
            return res.status(400).json({message:"Bad data"})
        }
        
        

       
        next();
        
    }
}

export default PostValidator;