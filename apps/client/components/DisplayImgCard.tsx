"use client";
import React from "react";
import { motion } from "framer-motion";

const DisplayImgCard = ({ img }: { img: string }) => {
  return (
    <div>
      <motion.img
        whileHover={{
          scale: 1.015,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className="h-auto max-w-full rounded-lg"
        src={img}
        alt=""
      />
    </div>
  );
};

export default DisplayImgCard;
