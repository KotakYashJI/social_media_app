import express from "express"
import dotenv from "dotenv"
import Userroute from "./router/user.route.js"
import Postroute from "./router/post.route.js"
import cookieparser from "cookie-parser"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieparser());

app.use("/user", Userroute);
app.use("/api/post", Postroute);

export default app;