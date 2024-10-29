import TypeWorkout from "../../models/data/typeWorkout.js";

export const getTypeWorkout = async (req, res) => {
    try {
        const typeWorkout = await TypeWorkout.find();
        res.status(200).json(typeWorkout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTypeWorkout = async (req, res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({ message: "Field is required name." });
    }
    try {
        const typeWorkout = new TypeWorkout({ name });
        await typeWorkout.save();
        res.status(201).json(typeWorkout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
