import React from "react";
import DisplayImgCard from "./DisplayImgCard";
import image1 from "../public/DSC08137-scaled.jpg";

const ImagePageGrids = () => {
  return (
    <div className="relative md:px-5 md:pb-5 pt-[3.5rem] md:pt-[5.5rem] px-2 pb-2 flex items-center justify-center">
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

export default ImagePageGrids;
