import mongoose from "mongoose";
import Trainer from "../models/trainer.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginTrainers = async (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Please provide username and password' });
    }

    try {
        // Find trainer by username
        const trainer = await Trainer.findOne({ username });
        if (!trainer) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, trainer.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ trainerId: trainer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, token, trainer: { id: trainer._id, username: trainer.username } });
    } catch (error) {
        console.error("Error in login:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}


export const getTrainers = async (req, res) => {
    try {
        const trainer = await Trainer.find({});
        res.status(200).json({success: true, data: trainer});
    } catch (error) {
        console.log("Error in fetching users: ", error.message);
        res.status(500).json({success: false, message: "Server error"});

    }
}

export const createTrainer = async (req, res) => {
    const { name,lastname, username, email, password, city, postcode, description, age, priceRange, typeWorkout, certifications, gender, language, environment  } = req.body;
    console.log(req.body);

    if (!name || !lastname || !username || !email || !password || !city || !postcode  || !age) {
        return res.status(400).json({ success: false, message: "Please provide all required fields." });
    }
    try {
        const existingTrainer = await Trainer.findOne({ $or: [{ username }, { email }] });
        if (existingTrainer) {
            return res.status(400).json({ success: false, message: "Username or email already in use." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Ustvari nov zapis za trenerja
        const newTrainer = new Trainer({
            name,
            lastname,
            username,
            email,
            password: hashedPassword,
            city,
            postcode,
            description,
            age,
            priceRange,
            typeWorkout,
            certifications,
            gender,
            language,
            environment,
        });
        await newTrainer.save();

        const token = jwt.sign({ id: newTrainer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ success: true, data: newTrainer, token });
    } catch (error) {
        console.error("Error in Create trainer:", error.message);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const updateTrainer = async (req, res) => {
    const { id } = req.params;
    const trainer = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({success: false, message: "User not found - invalid id"});
    }

    try{
        const updatedTrainer = await Trainer.findByIdAndUpdate(id, trainer, {new:true});
        res.status(200).json({success: true, data: updatedTrainer});
    }catch(error){
        res.status(500).json({success: false, message:"Something went wrong"});

    }
}

export const deleteTrainer = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({success: false, message: "Trainer not found - invalid id"});
    }

    try{
        await Trainer.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Trainer deleted successfully'});
    }catch (error) {
        console.log("Error in Delete trainer:", error.message);
        res.status(500).json({success: false, message:"Server error"});
    }
}