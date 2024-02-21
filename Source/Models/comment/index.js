import { DataTypes } from "sequelize";
import sequelize from "../../DB/config.js";
import PostModel from "../post/index.js";
import UserModel from "../user/index.js";

const commentModel = sequelize.define(
    "Comment",
    {
        comment:{
            type:DataTypes.STRING(1000)
        },
      
        username:{
            type:DataTypes.STRING,
        }
    },
    {
        
        paranoid:true
    },
)


PostModel.hasMany(commentModel);
commentModel.belongsTo(PostModel);


UserModel.hasMany(commentModel);
commentModel.belongsTo(UserModel);
export default commentModel;