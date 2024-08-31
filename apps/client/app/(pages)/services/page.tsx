"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../../public/DSC00436-scaled.jpg";
import Image2 from "../../../public/DSC00927454-copy-1-scaled.jpg";
import Image3 from "../../../public/IMG_6049-scaled.jpg";
import Image4 from "../../../public/DSC08137-scaled.jpg";
import Image5 from "../../../public/DSC03912-scaled.jpg";
import Image6 from "../../../public/20220706_231601-scaled.jpg";
import Image7 from "../../../public/DSC06627-1536x1024.jpg";
import Message from "../../../components/Message";
import ServicesCard from "../../../components/ServicesCard";
import { AnimatePresence, motion } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full pt-[6.5rem] mb-2.5 md:mb-5 px-2.5 md:px-5 flex flex-col gap-2.5"
      >
        <ServicesCard
          Image1={Image3}
          Image2={Image1}
          Service1="Newborn Photography"
          Service2="Interior Photography"
        />
        <ServicesCard
          Image1={Image2}
          Image2={Image7}
          Service1="Model Photography"
          Service2="Corporate Photography"
        />
        <ServicesCard
          Image1={Image4}
          Image2={Image6}
          Service1="Couple Photography"
          Service2="Event Photography"
        />
        <Message />
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
