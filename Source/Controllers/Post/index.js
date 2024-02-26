import PostModel from "../../Models/post/index.js";
import UserModel from "../../Models/user/index.js";
import AuthenticateMiddleware from "../../middleware/middleware.js";


const PostController = {
    create: async (req, res) => {
        try {
            const params = req.params;
            const payload = req.body;
             const hy = req.user.id;
            console.log(hy)
            const { title, description} = payload;

            const post = await PostModel.create({
               title,
               description,
                UserId:hy,
            })

            res.json({
                message:"post are created",
                post,
            })

        } catch (error) {
            res.json({
                message: "new post not created"
            })
        }
    },

    update:async(req,res)=>{
        try{
            const params = req.params;
            const payload = req.body;

            const post = await PostModel.findByPk(params.postId)
            if(!post){
                res.status(404).json({
                    message:"no data found"
                })
            }

            post.title = payload.title;
            post.description = payload.description;
            post.UserId = payload.userid;

            await post.save();

            res.json({
                message:"updated sucessfully",
                post,
            })

        }catch(error){
            res.json({
                message: "post not updated"
            })
        }
    },

    getAll:async(req,res)=>{
        try{

            const allPost = await PostModel.findAll();

            res.json({
                message:"get all post",
                allPost,
            })

        }catch(error){
            res.json({
                message:"not get all data"
            })
        }
    },

    getOne:async(req,res)=>{
        try{

            const params = req.params;

            const post = await PostModel.findOne({where:{id:params.postid}});

            if(!post){
                res.status(404).json({message:"Data not found"})
            }
            res.json({
                message:"get post",
                post,
            })

        }catch(error){
            res.status(404).json({
                message:"Data not found"
            })
        }
    }
}

export default PostController;