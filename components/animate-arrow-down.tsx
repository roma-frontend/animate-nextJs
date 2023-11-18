import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const variants = {
  scrollButton: {
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export default function ArrowDownCircle() {
  return (
    <motion.div
      aria-label="button to arrow down"
      className="flex items-center justify-center p-[.5rem] rounded-full bg-[#0B5C6F] border-0 text-[1.25rem] [box-shadow:_0_0_50px_#18B0B1] dark:[box-shadow:_0_0_50px_#18B0B1]"
      variants={variants}
      animate="scrollButton"
    >
      <ArrowDown className="h-6 w-6 text-white" />
    </motion.div>
  );
}
