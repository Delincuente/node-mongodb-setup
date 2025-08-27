import mongoose from "mongoose";

const userShema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, "Name is required"]
        },
        email:{
            type: String,
            required:[true, "Email is required"]
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userShema);