import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));



  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center px-6 text-white">
      
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Circles */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-pink-400 rounded-full opacity-50"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-40"
        animate={{ y: [0, 20, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-28 h-28 bg-purple-400 rounded-full opacity-40"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl font-extrabold mb-4 text-center drop-shadow-lg"
      >
        Welcome to <span className="text-yellow-300">LinkedMini</span>
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-xl max-w-xl text-center mb-10 drop-shadow-md"
      >
        Connect, share, and grow with a minimal social feed made just for you.
      </motion.p>

      {!isAuthenticated && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-x-6 flex"
        >
          <Link
            to="/login"
            className="bg-yellow-300 text-indigo-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 hover:text-indigo-900 transition transform hover:scale-105"
          >
            Register
          </Link>
        </motion.div>
      )}
    </div>
  );
}
