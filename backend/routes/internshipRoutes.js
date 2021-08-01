import express from "express";
import { getIntershipPage } from "../controllers/internshipcontrollers.js";

const router = express.Router();

router.get("/", getIntershipPage);

export default router;
