import React from "react";
import Not_found from "./404.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <>
      {/* Animated image */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          marginTop: "50px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Not_found}
          alt="not_found.svg"
          style={{ maxWidth: "801px", width: "100%" }}
        />
      </motion.div>

      {/* Animated text */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ color: "#000" }}>Looks like nothing was found :( </p>
      </motion.div>

      {/* Animated button */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to={`/`}>
          <button
            style={{
              width: "216px",
              height: "50px",
              borderRadius: "100px",
              background: "#000",
              color: "#fff",
            }}
          >
            Back to Home
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default NotFound;
