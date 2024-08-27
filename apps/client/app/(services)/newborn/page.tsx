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
            Newborn Photography
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base">
            Welcome to our Newborn Photography page, where every tiny detail is
            captured with care and tenderness. We understand that these first
            moments with your newborn are fleeting, which is why we aim to
            preserve the innocence and purity of your baby through our lens. Our
            sessions are designed to be gentle and relaxed, ensuring a
            comfortable experience for both baby and parents. From the delicate
            curl of their tiny fingers to their peaceful expressions, each
            photograph is a timeless keepsake, a precious reminder of the early
            days that pass all too quickly. Let us help you capture the
            beginning of your baby's unique story with love and artistry.
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
