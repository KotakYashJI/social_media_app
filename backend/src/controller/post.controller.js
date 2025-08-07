import { textfromimage } from "../services/ai.service.js";
import postmodel from "../model/post.model.js";
import { v4 as uuid } from "uuid"
import uploadfile from "../services/storage.service.js";

export const userposts = async (req, res) => {
    try {
        const file = req.file;
        const user = req.user;
        const base64img = file.buffer.toString('base64');
        const caption = await textfromimage(base64img);
        const image = await uploadfile(file.buffer, uuid());
        const userpost = await postmodel.create({
            image: image,
            caption: caption,
            user: user._id
        });
        res.status(201).json({
            message: "Post Send Successfully!",
            userpost
        })
    } catch (error) {
        res.status(500).json(error);
    }
}