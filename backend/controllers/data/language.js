import Language from "../../models/data/language.js";

export const getLanguage = async (req, res) => {
    try {
        const language = await Language.find();
        res.status(200).json(language);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createLanguage = async (req, res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({ message: "Field is required name." });
    }
    try {
        const createLanguage= new Language({ name });
        await createLanguage.save();
        res.status(201).json(createLanguage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
