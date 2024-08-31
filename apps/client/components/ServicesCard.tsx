"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gradientTmage from "../public/Lawrencium.jpg";
import gsap from "gsap";
import Link from "next/link";

const ServicesCard = ({
  Image1,
  Image2,
  Service1,
  Service2,
}: {
  Image1: any;
  Image2: any;
  Service1: string;
  Service2: string;
}) => {
  const parentContainerRef1 = useRef(null);
  const childContainerRef1 = useRef(null);
  const parentContainerRef2 = useRef(null);
  const childContainerRef2 = useRef(null);

  useEffect(() => {
    const animateElement = (
      parentContainer: HTMLElement | null,
      childContainer: HTMLElement | null
    ) => {
      if (!parentContainer || !childContainer) return;

      const showChild = () => {
        gsap.to(childContainer, { autoAlpha: 1, duration: 0.5 });
      };

      const hideChild = () => {
        gsap.to(childContainer, { autoAlpha: 0, duration: 0.5 });
      };

      gsap.set(childContainer, { autoAlpha: 0 });

      parentContainer.addEventListener("mouseenter", showChild);
      parentContainer.addEventListener("mouseleave", hideChild);

      return () => {
        parentContainer.removeEventListener("mouseenter", showChild);
        parentContainer.removeEventListener("mouseleave", hideChild);
      };
    };

    animateElement(parentContainerRef1.current, childContainerRef1.current);
    animateElement(parentContainerRef2.current, childContainerRef2.current);
  }, []);

  return (
    <div className="grid w-full gap-2.5 grid-cols-1 md:grid-cols-2">
      <div className="flex mb-10 flex-col gap-2">
        <div className="flex gap-1 items-center">
          <div className="size-3 md:size-4 bg-black rounded-full relative">
            <Image
              src={gradientTmage}
              layout="fill"
              alt=""
              className="w-full absolute h-full object-cover rounded-full"
            />
          </div>
          <span className="font-['lexend'] font-light text-sm md:text-base">
            {Service1}
          </span>
        </div>
        <motion.div
          whileHover={{ scale: 0.985 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
          ref={parentContainerRef1}
        >
          <Image
            src={Image1}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover aspect-square rounded"
          />
          <div
            ref={childContainerRef1}
            className="z-60 backdrop-blur-sm w-full h-full z-50 absolute flex justify-center items-center"
          >
            <Link
              href="/services"
              className="p-4 flex justify-end items-center border-white border-2 text-white font-['lexend'] font-light text-lg"
            >
              {Service1}
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="flex mb-10 flex-col gap-2">
        <div className="flex gap-1 items-center">
          <div className="size-3 md:size-4 bg-black rounded-full relative">
            <Image
              src={gradientTmage}
              layout="fill"
              alt=""
              className="w-full absolute h-full object-cover rounded-full"
            />
          </div>
          <span className="font-['lexend'] font-light text-sm md:text-base">
            {Service2}
          </span>
        </div>
        <motion.div
          whileHover={{ scale: 0.985 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-100 relative aspect-square"
          ref={parentContainerRef2}
        >
          <Image
            src={Image2}
            layout="fill"
            alt=""
            className="w-full absolute h-full object-cover aspect-square rounded"
          />
          <div
            ref={childContainerRef2}
            className="z-60 backdrop-blur-sm w-full h-full z-50 absolute flex justify-center items-center"
          >
            <Link
              href={"interior"}
              className="p-4 flex justify-end items-center border-white border-2 text-white font-['lexend'] font-light text-lg"
            >
              {Service2}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCard;
