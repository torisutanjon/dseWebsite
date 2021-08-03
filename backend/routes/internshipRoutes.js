import express from "express";
import { getInternshipPage } from "../controllers/internshipRouteControllers.js";
const router = express.Router();

router.get("/", getInternshipPage);

export default router;
