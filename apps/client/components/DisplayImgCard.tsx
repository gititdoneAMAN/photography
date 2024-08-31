"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DisplayImgCard = ({
  img,
  setShowCarousel,
}: {
  img: string;
  setShowCarousel: any;
}) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{
        scale: 1.015,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="relative h-full w-full"
    >
      <Image
        src={img}
        alt=""
        className="h-auto max-w-full rounded-lg cursor-pointer"
        onClick={() => {
          setShowCarousel(true);
        }}
        width={614}
        height={614}
        priority
      />
    </motion.div>
  );
};

export default DisplayImgCard;
