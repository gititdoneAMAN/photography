import Image from "next/image";
import React from "react";
import mainImage from "../../../public/Golden_Hour10-scaled.jpg";
import ProfileImage from "../../../public/rrreflection.svg";

const page = () => {
  return (
    <div className="pt-[5.5rem] px-5">
      <div className="text-3xl bg-black text-white w-72 h-72 ">
        <Image src={ProfileImage} alt="" />
      </div>
      <div>
        <Image src={mainImage} alt="" />
      </div>
    </div>
  );
};

export default page;
