import React from "react";
import DisplayImgCard from "./DisplayImgCard";

const Hero = () => {
  return (
    <div className="md:px-5 md:pb-5 pt-[5.5rem] px-2 pb-2 flex items-center justify-center">
      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
        <DisplayImgCard img="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
      </div>
    </div>
  );
};

export default Hero;
