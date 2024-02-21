import Joi from "joi";

const UserValidator = {
    create: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .min(3)
                .max(100)
                .required(),
            email: Joi.string().max(100),
            password: Joi.string(),
        })
        const response = schema.validate(req.body);
        if (response.error) {
           return res.status(400).json({ message: "bad data" })
        };
        next();
    }
}

export default UserValidator;