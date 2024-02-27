import commentModel from "../../Models/comment/index.js";
import UserModel from "../../Models/user/index.js";
import PostModel from "../../Models/post/index.js";


const commentController = {
    create: async (req, res) => {
        try {
            const params = req.params;
            const payload = req.body;

            const { comment, username, userid} = payload;
           

            const comments = await commentModel.create({
                comment,
                username,
                PostId: payload.postid,
                UserId: req.user.id
            })

            res.json({
                message: "comment are created",
                comments,
            })

        } catch (error) {
            res.json({
                message: "new comment not created"
            })
        }
    },

    update: async (req, res) => {
        try {
            const params = req.params;
            const payload = req.body;

            const updateComment = await commentModel.findByPk(req.params.commentid)
            if (!updateComment) {
                res.status(404).json({
                    message: "no data found"
                })
            }

            updateComment.comment = payload.comment;
            updateComment.username = payload.username;
            updateComment.UserId = payload.userid;
            updateComment.PostId = payload.postid;


            await updateComment.save();

            res.json({
                message: "updated sucessfully",
                updateComment,
            })

        } catch (error) {
            res.json({
                message: "comment not updated"
            })
        }
    },

    getAll: async (req, res) => {
        try {

            const allComment = await commentModel.findAll();

            res.json({
                message: "get all comment",
                allComment,
            })

        } catch (error) {
            res.json({
                message: "not get all data"
            })
        }
    },

    onlyUsers: async (req, res) => {
        try {

            const allComment = await commentModel.findAll({where:{UserId:req.user.id}});

            res.json({
                message: "get user comments",
                allComment,
            })

        } catch (error) {
            res.json({
                message: "not get all data"
            })
        }
    },

    getOne:async(req,res)=>{
        try {
            const params = req.params
            console.log(params)
            const oneComment = await commentModel.findOne({where:{id:params.commentid}});
            console.log(oneComment)
            res.json({
                message: "get one comment",
                oneComment,
            })

        } catch (error) {
            res.json({
                message: "not get comment"
            })
        }
    }
}

export default commentController;