
import commentModel from "../Models/comment/index.js";
import PostModel from "../Models/post/index.js";
import UserModel from "../Models/user/index.js";
import UserFollowerModel from "../Models/user/userFollower.js";

const dbInit = async () => {
    await UserModel.sync({
        alter: true,
        force: false
    });
    await PostModel.sync({
        alter: true,
        force: false
    });
    await commentModel.sync({
        alter: true,
        force: false
    });
    await UserFollowerModel.sync({
        alter:true,
        force:false,
    });
}

export default dbInit;