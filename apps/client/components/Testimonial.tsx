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
        <ReviewCard
          review="Pics and Pixel photography did great job on occasion of my son's birthday. They are completely amazing. They capture precious moment of my son's birthday. They made us totally comfortable during the entire process. Thank you so much for your valuable time. I highly recommend pic and pixel photography."
          author="Abhishek Kumar"
        />
        <ReviewCard
          author="Soniya Sunny"
          review="My visit to Pics & Pixel Photo Studio in Bangalore was outstanding. The photos were sharp and beautifully composed, thanks to their advanced equipment. The staff was friendly and professional, and the creative approach to capturing moments was impressive. The quick turnaround for the final edits was a bonus. Highly recommend for top-quality photography in Bangalore."
        />
        <ReviewCard
          author="Shaila Knh"
          review="We visited pics and pixel photography studio for my photo. The studio is very specious nice interior same way photographers are too good they will cooperate nicely. We had very nice experience. They will also help us fo poses.photos are just wowooo.we want to recommend them for every kind of photo shoot.they are really great."
        />
      </div>
      <div className="my-5">
        <Link
          href={
            "https://www.google.com/maps/place/Pics+and+Pixel+Photography/@13.067421,77.638192,14z/data=!4m18!1m9!3m8!1s0x8221296382b755d3:0x1289a32728fdb314!2sPics+and+Pixel+Photography!8m2!3d13.0674208!4d77.6381919!9m1!1b1!16s%2Fg%2F11jybtb60d!3m7!1s0x8221296382b755d3:0x1289a32728fdb314!8m2!3d13.0674208!4d77.6381919!9m1!1b1!16s%2Fg%2F11jybtb60d?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
          }
          className="py-2 px-3 bg-black   text-white rounded cursor-pointer"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
