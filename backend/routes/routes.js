import express from 'express';
import {createPrice, getPriceRange} from "../controllers/data/PriceRange.js";
import {createTypeWorkout, getTypeWorkout} from "../controllers/data/typeWorkout.js";
import {createExperience, getExperience} from "../controllers/data/experience.js";
import {createLanguage, getLanguage} from "../controllers/data/language.js";

const router = express.Router();

router.get("/price-ranges", getPriceRange);
router.post("/price-ranges", createPrice);

router.get("/type-workout", getTypeWorkout);
router.post("/type-workout", createTypeWorkout);

router.get("/experience", getExperience);
router.post("/experience", createExperience);

router.get("/language", getLanguage);
router.post("/language", createLanguage);

export default router;