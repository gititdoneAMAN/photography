import Image from "next/image";
import React from "react";
import quoteIcon from "../public/double-quotes-svgrepo-com.svg";

const ReviewCard = () => {
  return (
    <div className="bg-white p-5 max-h-[500px] rounded-3xl h-full flex-col justify-center items-center">
      <div className="relative size-9">
        <Image src={quoteIcon} layout="fill" alt="quote" />
      </div>
      <p className="text-justify text-sm md:text-base mt-5 font-['lexend'] text-gray-600">
        - Excellent service and top-notch print quality. She (Amala )went above
        and beyond to ensure my photos turned out perfectly. - Fast turnaround
        time, friendly staff, and stunning photo quality. I highly recommend Pix
        and Pixel for all your printing needs - The attention to detail and care
        taken by Pix and Pixel is impressive. My photos look amazing, - From
        film development to digital printing, Pix and Pixel delivers exceptional
        results every time. A true gem for photography enthusiasm
      </p>
      <div className="flex gap-1 items-center justify-center my-5">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <p className="text-gray-600 text-right">-Shylini Nag</p>
    </div>
  );
};

export default ReviewCard;

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FFD700"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
