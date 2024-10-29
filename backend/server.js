import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import User from "./models/user.js";
import mongoose from "mongoose";

import user from "./routes/user.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", user); //user routes

console.log(process.env.MONGO_URI);

app.listen(port, () => {
    connectDB();
    console.log('Server started on port http://localhost:3000');
});