import mongoose from "mongoose";

const languageSchema   = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Languages = mongoose.model("Languages", languageSchema );
export default Languages;