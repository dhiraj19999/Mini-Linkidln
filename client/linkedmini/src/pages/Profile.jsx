import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`/users/${userId}`);
        setUser(userRes.data);

        const postRes = await axios.get(`/posts/${userId}`);
        setPosts(postRes.data);
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <p className="text-center mt-10 text-white">Loading profile...</p>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 p-8 flex flex-col items-center">

      {/* Animated floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full opacity-70 filter blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-48 h-48 bg-purple-400 rounded-full opacity-60 filter blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-400 rounded-full opacity-50 filter blur-xl"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main profile container */}
      <div className="relative z-10 max-w-2xl w-full bg-white bg-opacity-90 rounded-xl shadow-xl p-8">

        {/* Profile Card */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">{user.name}</h1>
          <p className="text-gray-800"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-800 mt-2"><strong>Bio:</strong> {user.bio || "No bio available."}</p>
        </div>

        {/* User's Posts */}
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-600 italic">No posts yet by this user.</p>
        ) : (
          posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-5 mb-5 border border-indigo-200"
            >
              <p className="text-gray-900 mb-3">{post.content}</p>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
