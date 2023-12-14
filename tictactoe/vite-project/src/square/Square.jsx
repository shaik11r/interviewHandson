import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Square = ({ text, val }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={text}
        initial={{ opacity: 0, border: "4px solid transparent" }}
        animate={{ opacity: 1, border: val === text ? "4px solid #5e34eb" : "none" }}
        exit={{ opacity: 0, border: "4px solid transparent" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          borderRadius: "16px",
          color: "white",
        }}>
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

export default Square;
