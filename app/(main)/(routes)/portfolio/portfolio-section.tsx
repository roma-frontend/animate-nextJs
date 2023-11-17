"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

type ItemProps = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

const items: ItemProps[] = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18441518/pexels-photo-18441518/free-photo-of-luma-light-festival-in-queenstown-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/13488937/pexels-photo-13488937.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
  },
  {
    id: 3,
    title: "Vanilla js App",
    img: "https://images.pexels.com/photos/18235303/pexels-photo-18235303/free-photo-of-autumn-s-reflection.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18693461/pexels-photo-18693461/free-photo-of-a-city-with-a-tower-and-a-clock-tower.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
  },
];

const Single = ({ item }: { item: ItemProps }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 300]);

  return (
    <section className="relative -z-1 pt-[3rem] md:pt-[100px] min-h-min md:min-h-[screen]">
      <div className="flex items-center justify-center w-full h-full overflow-hidden gap-[2rem] px-[1.25rem]">
        <div className="max-w-[100%] md:max-w-[90%] xl:max-w-[90vw] 2xl:max-w-[80vw] w-full m-auto flex items-center justify-between gap-[50px] flex-col md:flex-row">
          <div className="flex-1" ref={ref}>
            <Image
              src={item.img}
              alt="item image"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-md"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <motion.div
            className="flex-1 w-full flex flex-col items-center md:items-start gap-[30px] text-center md:text-left"
            style={{ y }}
          >
            <h2 className="text-[32px] lg:text-[60px] md:text-[50px] sm:text-[40px]">
              {item.title}
            </h2>
            <p className="text-[18px] md:text-[20px] text-slate-800 dark:text-slate-400">
              {item.desc}
            </p>
            <Button
              aria-label="button to see demo"
              className="w-[200px] bg-[#0B5C6F] hover:bg-[#094858] hover:text-white rounded-lg text-white"
              variant={"outline"}
            >
              See Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <section id="Portfolio" ref={ref}>
      <div className="text-center text-black dark:text-white text-[36px] z-[1]">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px]">
          Կարծիքներ
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-[10px] bg-black dark:bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  );
};

export default PortfolioSection;
