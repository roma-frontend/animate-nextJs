import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Link from "next/link";

const font = Caveat({ subsets: ["latin"] });
interface LogoProps {
  open: boolean;
  onClick?: (isOpen: boolean) => void;
  className: string;
}

const Logo = ({ open, onClick, className }: LogoProps) => {
  const logoVariants = {
    initial: {
      x: 0,
    },
    open: {
      marginLeft: "280px",
      transition: {
        delay: 0.05,
      },
    },
    closed: {
      marginLeft: "0",
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Link
      href="/"
      onClick={() => {
        if (onClick) {
          onClick(false);
        }
      }}
    >
      <motion.button
        className={cn(
          "m-auto text-3xl md:text-4xl lg:text-5xl text-slate-800 dark:text-slate-200 font-serif",
          font.className
        )}
        variants={logoVariants}
        animate={open ? "open" : "closed"}
        initial="initial"
        aria-label="Link to AutoKey homepage"
      >
        AutoKey
      </motion.button>
    </Link>
  );
};

export default Logo;
