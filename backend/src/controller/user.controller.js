import usermodel from "../model/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const registeruser = (async (req, res) => {

    const { username, password } = req.body;
    const hashpassword = await bcryptjs.hash(password, 10);

    try {
        const isuserexist = await usermodel.findOne({
            username: username
        })

        if (!isuserexist) {
            const user = await usermodel.create({
                username: username,
                password: hashpassword
            })

            const payload = { id: user._id }
            const usertoken = jwt.sign(payload, process.env.JsonToken);
            res.cookie("token", usertoken);
            res.status(201).json({
                message: "User Registerd",
                user
            })
        }
        else return res.status(500).json("User Alerady Exist!");
    } catch (error) {
        res.status(500).json(error);
    }
})

export const loginuser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const loginuser = await usermodel.findOne({ username: username });
        if (!loginuser) {
            return res.status(401).json("User Not Found!");
        }
        const ispassword = await bcryptjs.compare(password, loginuser.password);
        if (!ispassword) {
            return res.status(401).json("Invalid Paasword");
        }

        const payload = { id: loginuser._id }
        const token = jwt.sign(payload, process.env.JsonToken);
        res.cookie("token", token);
        res.status(200).json({
            message: "User Login",
            loginuser
        })
    } catch (error) {
        res.status(500).json(error);
    }
}