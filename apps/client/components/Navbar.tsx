"use client";
import React, { useEffect, useState } from "react";
import logo from "../public/asset 0.png";
import Image from "next/image";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setShowHamburger(true);
        } else {
          setShowHamburger(false);
        }
      });
    };
  }, []);
  return (
    <nav className="flex z-10 fixed w-full justify-between items-center p-2 md:px-5 md:pb-4 md:pt-4 bg-transparent backdrop-blur-lg">
      <div className="flex gap-2 items-center justify-center">
        <Image src={logo} alt="logo" className="h-10 w-10 rounded-full" />
        <span className="text-2xl font-['lexend']">Pics&Pixel</span>
      </div>
      <div>
        {showHamburger ? (
          <Hamburger />
        ) : (
          <ul className="md:visible flex items-center  gap-8 text-md font-['lexend_Deca'] font-light">
            <li>Services</li>
            <li>Gallery</li>
            <li>About</li>
            <li className="py-2 px-3 bg-black text-white rounded">Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export default Navbar;
