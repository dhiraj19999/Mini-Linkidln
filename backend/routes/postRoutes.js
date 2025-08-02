import express from "express";
import { createPost, getAllPosts, getUserPosts } from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createPost);         
router.get("/", getAllPosts);               
router.get("/:userId", getUserPosts);       

export default router;
