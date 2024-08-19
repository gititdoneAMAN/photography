import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import Hero from "../components/Hero";
// import LocomotiveScroll from "locomotive-scroll";

export default function Page(): JSX.Element {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="text-3xl w-full">
      <Hero />
    </div>
  );
}
