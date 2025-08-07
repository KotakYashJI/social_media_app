import mongoose from "mongoose";

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const usermodel = mongoose.model("usermodel", userschema);

export default usermodel;