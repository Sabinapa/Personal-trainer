import express from 'express';

import {createTrainer, deleteTrainer, getTrainers, updateTrainer} from "../controllers/trainer.js";

const router = express.Router();

router.get("/", getTrainers);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;