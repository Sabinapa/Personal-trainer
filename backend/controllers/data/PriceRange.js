import PriceRange from "../../models/data/priceRange.js";

export const getPriceRange = async (req, res) => {
    try {
        const ranges = await PriceRange.find();
        res.status(200).json(ranges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPrice = async (req, res) => {
    const { min, max, label } = req.body;

    if (min === undefined || max === undefined || !label) {
        return res.status(400).json({ message: "All fields are required: min, max, and label." });
    }
    try {
        const priceRange = new PriceRange({ min, max, label });
        await priceRange.save();
        res.status(201).json(priceRange);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
