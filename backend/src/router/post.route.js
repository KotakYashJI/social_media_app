import express from "express";
import multer from "multer"
import {userauth} from "../middleware/auth.middleware.js"
import { userposts } from "../controller/post.controller.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", userauth, upload.single("imgurl"),userposts)

export default router;