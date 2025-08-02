import express from "express";
import { createPost, getAllPosts, getUserPosts } from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPost);         // Create post
router.get("/", getAllPosts);               // Public feed
router.get("/:userId", getUserPosts);       // Posts by user

export default router;
