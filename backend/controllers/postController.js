import Post from "../models/Post.js";
import User from "../models/User.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const newPost = new Post({ content, author: req.user.id });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create post" });
  }
};

// Get all posts (public feed)
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")  // fetch name and email of author
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch posts" });
  }
};

// Get posts by a specific user
export const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch user posts" });
  }
};
