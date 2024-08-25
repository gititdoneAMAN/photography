import Link from "next/link";
import React from "react";

const Message = () => {
  return (
    <div className="mt-5 flex flex-col gap-2  bg-gray-100 p-10">
      <p className="text-lg text-center text-gray-600">
        Trust Pics and Pixel Photography to deliver exceptional results that
        exceed your expectations. Contact us today to book your photoshoot and
        let us help you create memories that will last a lifetime!
      </p>
      <Link
        href={"/contactUs"}
        className="py-2 px-3 w-[7rem] m-auto bg-black text-white rounded cursor-pointer"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Message;
