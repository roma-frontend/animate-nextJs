"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxSectionProps = {
  id: string;
  type: string;
};

const ParallaxSection = ({ id, type }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", ["500%"]]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", ["100%"]]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-[100vh]",
        type === "services"
          ? "bg-gradient-to-r from-#0c0c1d to-#111132 via-transparent 180deg"
          : ""
      )}
    >
      <motion.h1
        className="relative z-[100] text-[40px] lg:text-[100px] md:text-[80px] sm:text-[70] text-black dark:text-white text-center"
        style={{ y: yText }}
      >
        {type === "services" ? "Our ideas" : "Our results"}
      </motion.h1>
      <motion.div
        style={{
          backgroundImage: "url(/night-mode.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "3",
        }}
        className=""
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "2",
        }}
        className="dark:bg-[url('/planets.webp')]"
      ></motion.div>
      <motion.div
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1",
          opacity: ".2",
          x: yBg,
        }}
        className="bg-[url('/stars.webp')] dark:bg-[url('/stars-night.webp')]"
      ></motion.div>
    </section>
  );
};

export default ParallaxSection;
