"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../navigation/_components/logo";
import Links from "./_components/links";
import ToggleButton from "./_components/toggle-button";

const font = Caveat({ subsets: ["latin"] });

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const closeSidebar = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <div className="flex items-center">
      {pathname === "/" ? (
        <>
          <motion.div
            animate={open ? "open" : "closed"}
            className="flex lg:hidden"
          >
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-full sm:w-[320px] lg:w-[340px] bg-black dark:bg-white z-[40] opacity-0"
              variants={variants}
            >
              <Links closeSidebar={closeSidebar} />
              <ToggleButton setOpen={setOpen} />
            </motion.div>
          </motion.div>
          <Logo
            open={open}
            onClick={closeSidebar}
            className="mt-[8px] md:mt-[3px]"
          />
        </>
      ) : (
        <Link
          href="/"
          className={cn(
            "mr-auto my-auto text-3xl md:text-4xl lg:text-5xl text-slate-800 dark:text-slate-200 font-serif",
            font.className
          )}
          aria-label="Link to AutoKey homepage"
        >
          AutoKey
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
