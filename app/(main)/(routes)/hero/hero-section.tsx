"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const imageVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section
      id="Homepage"
      className="flex overflow-hidden min-h-[70vw] lg:min-h-[100vh]"
    >
      <div className="relative flex items-center justify-between md:flex-row flex-col max-w-[100%] md:max-w-[90%] xl:max-w-[90vw] 2xl:max-w-[80vw] m-auto px-[1.25rem] pt-[1.25rem] md:pt-0 gap-[2rem]">
        <div className="w-full md:w-[50%] flex flex-col justify-center gap-[40px]">
          <h2 className="text-[1.125rem] md:text-[24px] text-[#04355C] dark:text-[#18B0B1] tracking-0 sm:tracking-[5px] md:tracking-[10px] md:text-left text-center uppercase">
            {/* ընտրիր լավագույնին */}
            Lorem Ipsum
          </h2>
          <h1 className="text-[32px] md:text-[4.7vw] leading-snug tracking-[3px] md:tracking-[5px] md:text-left text-center">
            {/* Բանալիների ծրագրավորում */}
            Amet consectetur adipisicing elit.
          </h1>
          <motion.div className="flex flex-wrap gap-[1.5rem] md:justify-start justify-center">
            <Link href="#Portfolio">
              <motion.button
                className="p-[20px] border border-[#111132] dark:border-white rounded-[10px] bg-transparent text-[#111132] dark:text-white cursor-pointer font-light"
                variants={textVariants}
              >
                {/* Տեսնել ավելին */}
                See more
              </motion.button>
            </Link>
            <Link href="#Contacts">
              <motion.button
                className="p-[20px] border border-[#111132] dark:border-white rounded-[10px] bg-transparent text-[#111132] dark:text-white cursor-pointer font-light"
                variants={textVariants}
              >
                {/* Կապ մեզ հետ */}
                Contact us
              </motion.button>
            </Link>
          </motion.div>
          <div className="flex md:justify-start justify-center">
            <motion.img
              src="/mouse-dark.png"
              alt="scroll icon"
              width={50}
              height={50}
              className="object-contain block dark:hidden "
              variants={textVariants}
              animate="scrollButton"
            />
            <motion.img
              src="/mouse-light.png"
              alt="scroll icon"
              width={50}
              height={50}
              className="object-contain hidden dark:block "
              variants={textVariants}
              animate="scrollButton"
            />
          </div>
        </div>
        <motion.div
          className="absolute text-[30vh] md:text-[40vh] lg:text-[50vh] tracking-[5px] bottom-0 md:bottom-[50px] lg:bottom-[-120px] whitespace-nowrap z-[-1] text-[#00000009] dark:text-[#ffffff09] w-[50%] font-bold"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          {/* Բանալիների պատրաստում */}
          Key programming
        </motion.div>
        <div className="flex items-center h-full w-[80%] md:w-[50%]">
          <Image
            src="/hero.webp"
            alt="hero image"
            width={540}
            height={314}
            className="w-full h-full object-cover"
            sizes="100vw"
            priority
            loading="eager"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
