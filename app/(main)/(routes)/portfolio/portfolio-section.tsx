"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { ItemProps } from "@/constants/single-data";
import { useModal } from "@/hooks/use-modal";

import { items } from "@/constants/single-data";

const Single = ({ item }: { item: ItemProps }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isOpen, onOpen, onClose } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    if (isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      onOpen();
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
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
              onClick={onClick}
            >
              See Demo
            </Button>
          </motion.div>
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full">
              <video controls width="100%" height="auto">
                <source src={item.videoUrl} type="video/mp4" />
              </video>
            </DialogContent>
          </Dialog>
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
          {/* Կարծիքներ */}
          Feedbacks
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
