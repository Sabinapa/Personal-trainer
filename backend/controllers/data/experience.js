import Experience from "../../models/data/experience.js";

export const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find();
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createExperience = async (req, res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({ message: "Field is required name." });
    }
    try {
        const createexperience = new Experience({ name });
        await createexperience.save();
        res.status(201).json(createexperience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
