import mongoose from "mongoose";

const experienceSchema   = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Experience = mongoose.model("Experience", experienceSchema );
export default Experience;