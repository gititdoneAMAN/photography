import React from "react";
import Image from "next/image";
import quoteIcon from "../public/double-quotes-svgrepo-com.svg";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
const Testimonial = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen py-7 px-5 w-full rounded-t-3xl flex-col gap-5">
      <div className="flex flex-col border-b-2">
        <h1 className="text-3xl md:text-5xl font-['oswald'] text-center ">
          What Our Customers Say
        </h1>
        <p className="text-sm text-gray-600 text-center p-5 font-['lexend'] font-light md:text-lg italic">
          Hear from those who have trusted us to capture their most cherished
          moments. Their stories and experiences reflect the passion and
          dedication we pour into every shot, ensuring each memory is
          beautifully preserved.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="my-5">
        <Link
          href={
            "https://www.google.com/maps/place/Pics+and+Pixel+Photography/@13.067421,77.638192,14z/data=!4m18!1m9!3m8!1s0x8221296382b755d3:0x1289a32728fdb314!2sPics+and+Pixel+Photography!8m2!3d13.0674208!4d77.6381919!9m1!1b1!16s%2Fg%2F11jybtb60d!3m7!1s0x8221296382b755d3:0x1289a32728fdb314!8m2!3d13.0674208!4d77.6381919!9m1!1b1!16s%2Fg%2F11jybtb60d?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
          }
          className="py-2 px-3 w-[7rem] m-auto bg-black text-white rounded cursor-pointer"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
