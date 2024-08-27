import React from "react";
import ImagePageGrids from "../../../components/ImagePageGrids";
import Message from "../../../components/Message";
import Testimonial from "../../../components/Testimonial";

const page = () => {
  return (
    <div className="w-full pt-[5.5rem] font-light  min-h-screen">
      <div className="flex flex-col ">
        <header className="flex flex-col gap-2.5 px-5">
          <h1 className="text-3xl md:text-5xl text-center font-['oswald']">
            Interior Photography
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base">
            "Transforming spaces into visual masterpieces, our interior
            photography captures the essence of design, light, and ambiance
            within every room. We focus on highlighting the unique features and
            aesthetics that make your space stand out, whether it's a cozy home,
            a luxurious hotel, or a modern office. Through a blend of creative
            angles and expert lighting techniques, we create images that not
            only showcase the beauty of your interiors but also evoke the
            feeling of living or working within them. Let us bring your spaces
            to life with photography that tells their story."
          </p>
        </header>
        <main>
          <ImagePageGrids />
        </main>
        <Testimonial />
        <Message />
      </div>
    </div>
  );
};

export default page;
