"use client";
import React, { useEffect, useState } from "react";
import logo from "../public/asset 0.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
        setShowMenu(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex z-10 fixed w-full justify-between items-center p-2 md:px-5 md:pb-4 md:pt-4 bg-transparent backdrop-blur-lg">
      <div
        className="flex gap-1 items-center justify-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={logo}
          alt="logo"
          className=" h-8 w-8 md:h-10 md:w-10 rounded"
        />
        <span className="text-3xl md:text-4xl font-['Bourbon_St_Regular']">
          Pics&Pixel
        </span>
      </div>
      <div className="relative">
        {showHamburger ? (
          <>
            <Hamburger onClick={() => setShowMenu(!showMenu)} />
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="fixed h-[100vh] w-[100vw] inset-0 z-200 bg-black flex flex-col justify-center items-center text-white"
                >
                  <div className="absolute top-5 right-5">
                    <CloseIcon onClick={() => setShowMenu(!showMenu)} />
                  </div>
                  <ul className="flex flex-col text-center p-5 gap-8 text-lg font-['lexend_Deca'] font-light">
                    <Link
                      href={"/services"}
                      className="cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href={"/gallery"}
                      className="cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Gallery
                    </Link>
                    <Link
                      href={"/about"}
                      className="cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      About
                    </Link>
                    <Link
                      href={"/contactUs"}
                      className="py-2 px-3 bg-white text-black rounded cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Contact Us
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ul className="md:visible flex items-center  gap-8 text-sm font-['lexend_Deca'] font-light">
            <Link href={"/services"} className="cursor-pointer">
              Services
            </Link>
            <Link href={"/gallery"} className="cursor-pointer">
              Gallery
            </Link>
            <Link href={"/about"} className="cursor-pointer">
              About
            </Link>
            <Link
              href={"/contactUs"}
              className="py-2 px-3 bg-black text-white rounded cursor-pointer"
            >
              Contact Us
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

function Hamburger({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
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

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export default Navbar;
