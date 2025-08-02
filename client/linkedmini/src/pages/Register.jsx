import { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", form);
      toast.success("Registered! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 px-4">

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 bg-purple-400 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-white bg-opacity-90 rounded-xl shadow-xl max-w-md w-full p-8"
      >
        <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-900 drop-shadow-md">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Bio"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold shadow-md transition transform hover:scale-105"
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}
