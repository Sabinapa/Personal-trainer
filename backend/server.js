import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";

import user from "./routes/user.js"
import trainer from "./routes/trainer.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", user); //user routes
app.use("/api/trainers", trainer); //trainer routes
app.use("/api/data", routes); //prices, workout,...

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started on port http://localhost:' + PORT);
});