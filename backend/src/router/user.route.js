import express from "express"
import { userauth } from "../middleware/auth.middleware.js";
import { loginuser, registeruser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginuser);

export default router;