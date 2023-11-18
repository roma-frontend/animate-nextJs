import { useHash } from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SidebarProps {
  closeSidebar: (isOpen: boolean) => void;
}

const items = [
  {
    name: "Homepage",
    href: "#Homepage",
  },
  {
    name: "Services",
    href: "#Services",
  },
  {
    name: "Portfolio",
    href: "#Portfolio",
  },
  {
    name: "Contacts",
    href: "#Contacts",
  },
];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ closeSidebar }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const cleanup = useHash(setActiveItem);

    return () => {
      cleanup();
    };
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      closeSidebar(false);
    }, 1000);
  };

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-[20px] text-[40px]"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`${item.href}`}
          key={item.name}
          className={cn(
            "text-white dark:text-black capitalize text-[32px] md:text-[40px]",
            activeItem === `${item.href}` &&
              "text-[#096177] dark:text-[#18B0B1]"
          )}
          variants={itemVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
