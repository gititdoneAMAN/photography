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

import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full h-full pt-[6.5rem] mb-5 px-5 flex flex-col gap-5">
      <div className="grid mb-5 max-h-screen w-full gap-5 grid-cols-1 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image3}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover aspect-square"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image6}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover "
            objectPosition="center"
          />
        </motion.div>
      </div>
      <div className="grid mb-5 max-h-screen w-full gap-5 grid-cols-1 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image2}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image7}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover "
            objectPosition="center 30%"
          />
        </motion.div>
      </div>
      <div className="grid mb-5 max-h-screen w-full gap-5 grid-cols-1 md:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image4}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
        >
          <Image
            src={Image5}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover "
            objectPosition="center 30%"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
