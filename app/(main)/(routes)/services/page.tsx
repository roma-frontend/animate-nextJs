"use client";

import ArrowDownCircle from "@/components/animate-arrow-down";
import { Button } from "@/components/ui/button";
import { contentData } from "@/lib/content-data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/services/${id}`, { cache: "no-store" });
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      id="Services"
      className="w-full flex items-center justify-center gap-[2rem]"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="flex flex-col max-w-[100%] xl:max-w-[92vw] 2xl:max-w-[80vw] mx-auto px-[1.25rem]">
        <motion.div
          className="justify-center md:justify-end flex flex-wrap md:flex-nowrap items-center gap-[1rem] mb-[2rem]"
          variants={variants}
        >
          <p className="w-full md:w-[60%] font-light text-[20px] text-gray-400 text-center md:text-right">
            Մենք կենտրոնանում ենք ձեր նոր ձեռքբերումների <br /> և նորաոճ մեքենա
            ունենալու վրա։
          </p>
          <hr className="w-full md:w-[40%] border-0 border-t-[0.5px]" />
        </motion.div>
        <motion.div
          className="flex flex-col items-center mb-[2rem]"
          variants={variants}
        >
          <div className="flex items-center gap-[50px] mb-[1.5rem] flex-col md:flex-row">
            <Image
              src="/people.webp"
              alt="people image"
              width={300}
              height={100}
              className="object-cover rounded-full w-[300px] h-[100px]"
            />
            <h1 className="text-[1.5rem] md:text-[3.3vw] font-thin">
              <b>Ունիկալ</b> մտքեր
            </h1>
          </div>
          <div className="flex items-center gap-[2rem] flex-col md:flex-row">
            <h1 className="text-[1.5rem] md:text-[3.3vw] font-thin">
              <b>Ձեր մեքենայի</b> համար
            </h1>
            <ArrowDownCircle />
          </div>
        </motion.div>
        <motion.div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto z-[5]">
          {contentData.map((product) => (
            <motion.div
              key={product.id}
              className="max-w-[320px] p-[50px] md:p-[30px] border-[0.5px] border-slate-100 dark:border-slate-950 hover:dark:border-slate-800 flex flex-col items-center justify-between transition-all ease-linear hover:bg-orange-50 dark:hover:bg-[#10102e]"
              variants={variants}
            >
              <Image
                src={product.imageUrl}
                alt="product image"
                width={250}
                height={250}
                className="object-cover w-[300px] h-[280px] mb-[1rem]"
              />
              <div className="flex flex-col">
                <h2 className="mb-[1rem]">{"Ключ для " + product.heading}</h2>
                <p className="mb-[2rem]">{product.paragraph}</p>
                <Button
                  aria-label={product.buttonText}
                  className="min-h-[50px] bg-[#0B5C6F] hover:bg-[#094858] border-0 text-[20px] lg:text-[22px] font-light text-white cursor-pointer"
                  onClick={() => handleClick(product.id)}
                >
                  {product.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
