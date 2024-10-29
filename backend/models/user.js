import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, {
    timestamps: false
});


const User = mongoose.model("User", userSchema);
export default User;