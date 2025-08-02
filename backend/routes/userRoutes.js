import express from "express";
import { getUserProfile, getMyProfile } from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Public: Get user by ID
router.get("/:userId", getUserProfile);

// Private: Get current user profile
router.get("/", auth, getMyProfile);

export default router;
