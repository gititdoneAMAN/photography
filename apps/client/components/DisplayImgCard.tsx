"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DisplayImgCard = ({ img }: { img: string }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <motion.img
        whileHover={{
          scale: 1.015,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        onClick={() => router.push(`/photoView`)}
        className="h-auto max-w-full rounded-lg cursor-pointer"
        src={img}
        alt=""
      />
    </div>
  );
};

export default DisplayImgCard;
