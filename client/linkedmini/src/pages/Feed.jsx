import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/posts");
      setPosts(res.data);
    } catch (err) {
      toast.error("Failed to fetch posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      await axios.post("/posts", { content });
      setContent("");
      toast.success("Post created!");
      fetchPosts();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to create post");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 px-6 md:px-16 lg:px-24 py-12">

      {/* Floating blurred blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full opacity-70 filter blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-20 w-48 h-48 bg-purple-400 rounded-full opacity-60 filter blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-36 h-36 bg-blue-400 rounded-full opacity-50 filter blur-xl"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content container */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-xl shadow-xl p-8 w-full max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Public Feed</h1>

        <form onSubmit={handlePost} className="mb-10 w-full">
          <textarea
            rows="4"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 border rounded resize-none focus:outline-indigo-500"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Post
          </button>
        </form>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 italic">No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6 mb-6 border border-indigo-200"
            >
              <div className="flex justify-between items-center text-sm text-indigo-700 mb-3">
                <Link
                  to={`/profile/${post.author._id}`}
                  className="font-semibold hover:underline"
                >
                  {post.author.name}
                </Link>
                <span className="text-gray-500">{new Date(post.createdAt).toLocaleString()}</span>
              </div>
              <p className="text-gray-900">{post.content}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
