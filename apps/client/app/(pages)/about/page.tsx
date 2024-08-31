import Image from "next/image";
import React from "react";
import mainImage from "../../../public/DSC02593_-scaled.jpg";
import Image1 from "../../../public/Golden_Hour10-scaled.jpg";
import Image2 from "../../../public/DSC03487-2048x1366.jpg";
import Link from "next/link";
import Message from "../../../components/Message";
import Services from "../../../components/Services";

const page = () => {
  return (
    <div className="pt-[5.5rem] mb-5 px-2.5 md:px-5 min-h-screen w-full">
      <div className="h-full">
        <div className="h-[80vh] w-full">
          <Image
            src={mainImage}
            alt="phone"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-100 rounded-3xl p-5 flex flex-col justify-center  gap-2.5 md:gap-5 text-center">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-['oswald'] text-center">
              About
            </h2>
            <p className=" lg:text-md">
              Welcome to Pics and Pixel Photography! We are Bangalore based
              experienced Wedding, Family, Kids, Event, Interior and Product
              Photographer. We strive to capture all your beautiful moments so
              that you can relish it forever. Each of our client is special and
              we ensure that enough attention is paid to the finer details and
              specific requirements.
            </p>
          </div>
          <div className="">
            <Image src={Image1} alt="phone" className="w-full object-cover" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <Image src={Image2} alt="phone" className="w-full object-cover" />
          </div>
          <div className="bg-gray-100 rounded-3xl p-5 flex flex-col justify-center gap-2.5 md:gap-5 text-center">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-['oswald'] text-center">
              Our Mission
            </h2>
            <p className="  md:text-md ">
              Our goal is to create images that reflect the essence of our
              clients and their unique personality, capturing the emotion,
              connection, and beauty that make them stand out. With a keen eye
              for aesthetics, We use natural light, creative props, and
              professional equipment to produce high-quality images that are
              both unique and timeless. Whether it’s a family function, a
              modeling shoot, or a special occasion, We work closely with our
              clients to understand their vision and preferences, ensuring that
              their photographs exceed their expectations.
            </p>
          </div>
        </div>
        <div>
          <Services />
        </div>
        <Message />
      </div>
    </div>
  );
};

export default page;
