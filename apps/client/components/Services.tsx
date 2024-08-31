import Image from "next/image";
import Link from "next/link";
import React from "react";
import Image1 from "../public/DSC02643-scaled.jpg";
import Image2 from "../public/DSC00550-scaled.jpg";
import Image3 from "../public/DSC03912-scaled.jpg";
import Image4 from "../public/DSC01398625-copy-1-scaled.jpg";

const Services = () => {
  return (
    <div className="px-5 flex items-center justify-center bg-slate-100 p-10 my-10 min-h-screen w-full">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
        <header className="flex flex-col gap-2.5 md:gap-5 p-5 bg-white rounded-3xl px-5 items-center justify-center  h-full">
          <h1 className="text-3xl md:text-5xl text-center font-['oswald'] font-light ">
            What we offer
          </h1>
          <p className="text-center text-sm md:text-base text-gray-600 font-['lexend'] font-light">
            We specialize in capturing life's most cherished moments with
            expertise in wedding, family, kids, and event photography. Our
            services also extend to interior and product photography, ensuring
            every project is tailored to your unique needs. Whether it's the joy
            of a wedding, the warmth of family, the energy of an event, or the
            details of a product, we deliver stunning images that tell your
            story with creativity and precision.
          </p>
          <div className="flex gap-5">
            <Link
              href={"/contactUs"}
              className="py-1.5 px-3 w-[8rem] text-center m-auto border-black border-2 text-black rounded cursor-pointer"
            >
              Contact Us
            </Link>
            <Link
              href={"/services"}
              className="py-2 px-3 w-[7rem] m-auto bg-black text-center text-white rounded cursor-pointer"
            >
              Services
            </Link>
          </div>
        </header>
        <div className="grid gap-5 grid-cols-2">
          <div className="bg-red-400 relative aspect-square">
            <Image
              src={Image1}
              className="w-full object-cover h-full"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <div className="bg-red-400 relative aspect-square">
            <Image
              src={Image2}
              className="w-full object-cover h-full"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <div className="bg-red-400 relative aspect-square">
            <Image
              src={Image3}
              className="w-full object-cover h-full"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <div className="bg-red-400 relative aspect-square">
            <Image
              src={Image4}
              className="w-full object-cover h-full"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
