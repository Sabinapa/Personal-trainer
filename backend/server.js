import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

//app.get("/users", (req, res) => {})

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started on port http://localhost:5000');
});