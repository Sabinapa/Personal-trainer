import mongoose from "mongoose";

const workoutTypeSchema   = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});


const TypeWorkout = mongoose.model("TypeWorkout", workoutTypeSchema );
export default TypeWorkout;