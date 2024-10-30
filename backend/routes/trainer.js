import express from 'express';

import {
    createTrainer,
    deleteTrainer,
    getTrainer,
    getTrainers,
    loginTrainers,
    updateTrainer
} from "../controllers/trainer.js";

const router = express.Router();

router.post("/login", loginTrainers)
router.get("/:trainerId", getTrainer);
router.get("/", getTrainers);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;