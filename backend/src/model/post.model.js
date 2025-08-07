import mongoose from "mongoose";

const postschema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const postmodel = mongoose.model("postmodel", postschema);

export default postmodel;