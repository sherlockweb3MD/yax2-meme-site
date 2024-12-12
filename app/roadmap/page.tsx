"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center items-center h-[calc(100vh-108px)]">
        $PEKKY Roadmap
      </div>
    </motion.div>
  );
}
