import jwt from "jsonwebtoken";
import usermodel from "../model/user.model.js";

export const userauth = (async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(500).json("user not authenticated please login")
    }

    try {
        const user = jwt.verify(token, process.env.JsonToken)
        const loginuser = await usermodel.findOne({
            _id: user.id
        });

        if (!loginuser) {
            return res.status(500).json("User Not Found");
        }

        req.user = loginuser;
        next();
    } catch (error) {
        res.status(500).json(error);
    }

})