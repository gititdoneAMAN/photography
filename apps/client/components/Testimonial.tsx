import React from "react";

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen py-7 px-5 w-full rounded-t-3xl flex-col gap-5">
      <div className="flex flex-col">
        <h1 className="text-5xl font-['oswald'] text-center ">
          What Our Customers Say
        </h1>
        <p className="text-gray-600 text-center p-5 font-['lexend'] font-light text-lg italic">
          Hear from those who have trusted us to capture their most cherished
          moments. Their stories and experiences reflect the passion and
          dedication we pour into every shot, ensuring each memory is
          beautifully preserved.
        </p>
      </div>
      <div className="w-full flex gap-5 flex-grow border">
        <div className="bg-white p-2 max-h-[500px] rounded-3xl flex-grow"></div>
        <div className="bg-white p-2 max-h-[500px] rounded-3xl flex-grow"></div>
        <div className="bg-white p-2 max-h-[500px] rounded-3xl flex-grow"></div>
      </div>
    </div>
  );
};

export default Testimonial;
