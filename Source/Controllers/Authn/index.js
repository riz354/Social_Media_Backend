import UserModel from "../../Models/user/index.js";
import Jwt from "jsonwebtoken";



const AuthController = {
  login: async (req, res) => {

    const payload = req.body;
    const user = await UserModel.findOne(
      { where: { email: payload.email, password: payload.password } }
    );

    if (!user) {
      return res.status(401).json({ meassage: "Invalid credentials" })
    }

    const token = Jwt.sign({
      id: user.id,
      name: user.name,
      email: user.password,

    }, 'sdccsdcw', {
      expiresIn: "12m"
    });


    res.json({
      message: "login successfully",
      token,
    })

  }
}


export default AuthController;