import mongoose from "mongoose";

const priceRange  = new mongoose.Schema({
    min: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
        required: true,
    }
});


const PriceRange = mongoose.model("PriceRange", priceRange);
export default PriceRange;