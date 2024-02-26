import UserModel from "../../Models/user/index.js";
import UserFollowerModel from "../../Models/user/userFollower.js";

const UserController = {
    create: async (req, res) => {
        try {
            const payload = req.body;
            const { name, email, password } = req.body;
            const user = await UserModel.create({
                name,
                email,
                password,
            })

            res.json({
                message: "create new user sucessfully",
                user,
            })

        } catch (error) {
            res.json({
                message: "new user not created",

            })
        }
    },

    update: async (req, res) => {
        try {
            const payload = req.body;
            const params = req.params;

            const user = await UserModel.findByPk(params.userId);

            if (!user) {
                return res.status(404).json({
                    message: "No data found"
                })
            }

            user.name = payload.name;
            user.email = payload.email;
            user.password = payload.password;

            await user.save();

            res.json({
                message: "user updated",
                user,
            })

        } catch (error) {
            res.json({
                message: "user not  updated"
            })
        }
    },

    getAll: async (req, res) => {
        try {

            const user = await UserModel.findAll();
            res.json({
                message: "all users",
                user,
            })

        } catch (error) {
            res.status(404).json({ message: "No data found" })
        }
    },
    getOne: async (req, res) => {
        try {
            const params = req.params;

            const user = await UserModel.findOne({ where: { id: params.userid } });
            if (user != null) {
                return res.json({
                    message: "get user",
                    user,
                })
            }else {
                res.status(404).json({ message: "No data found" })
            }
        } catch(error) {
            console.log(error)
        }
    },
    follow:async(req,res)=>{
        try{
            const {follwerId,followeeId} = req.body;

            await UserFollowerModel.create({
                followerId:follwerId,
                followeeId:followeeId,
            })

            return res.json({message:"followed successfuly"})
        }catch(error){
            res.json({
                message:"error in following"
            })
        }
    }
}

export default UserController;