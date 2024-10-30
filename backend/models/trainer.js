import mongoose, {Schema} from "mongoose";

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    description: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postcode: {
        type: Number,
        required: true,
    },
    priceRange: {
        type: Schema.Types.ObjectId,
        ref: "PriceRange",
        required: false,
    },
    typeWorkout: [{ type: Schema.Types.ObjectId, ref: "WorkoutType" }],
    certifications: [{ type: Schema.Types.ObjectId, ref: "Certification" }],
    gender: {
        type: String,
        required: true,
    },
    language: [{ type: Schema.Types.ObjectId, ref: "Language" }],
    environment: {
        type: String,
        required: true,
    },

}, {
    timestamps: false
});

const Trainer = mongoose.model("Trainer", trainerSchema);
export default Trainer;