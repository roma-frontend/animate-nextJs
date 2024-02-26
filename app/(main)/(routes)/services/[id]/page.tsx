"use client";

import Loader from "@/components/loader";
import NotFoundPage from "@/components/not-found";
import Slider from "@/components/slider-carousel";
import { contentData } from "@/constants/content-data";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

interface ProductProps {
  id: number;
  heading: string;
  paragraph: string;
  imageUrl: string;
}

const ServicePage = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<ProductProps[] | null>(null);
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      setContent(contentData);
      setLoading(false);
    }, 2000);
  }, [params]);

  const id = Number(params.id);

  if (loading) {
    return <Loader />;
  }

  if (!content) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const selectedContent = content.find((product) => product.id === id);

  if (!selectedContent) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }

  const textVariants = {
    initial: {
      y: -500,
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

  const keyVariants = {
    initial: {
      X: 500,
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

  const { heading, paragraph } = selectedContent;

  return (
    <>
      <motion.section
        className="flex flex-col items-center justify-center overflow-hidden"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-center text-[32px] md:text-[40px] lg:text-[60px] tracking-wide mb-[2rem] md:mb-0"
          variants={textVariants}
        >
          Info Page
        </motion.h1>
        <div className="max-w-[100%] lg:max-w-[90vw] 2xl:max-w-[80vw] m-auto flex items-center justify-between gap-[2rem] flex-col md:flex-row px-[1.25rem]">
          <motion.div
            className="flex flex-col gap-4 max-w-[468px]"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-center md:text-left text-4xl font-medium"
              variants={textVariants}
            >
              {heading}
            </motion.h2>
            <motion.p
              className="text-center md:text-left text-md"
              variants={textVariants}
            >
              {paragraph}
            </motion.p>
          </motion.div>
          <motion.div
            variants={keyVariants}
            initial="initial"
            animate="animate"
            className="slide w-[400px] h-[420px]"
          >
            <Slider />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicePage;
