import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }: { setOpen: any }) => {
  return (
    <Button
      variant="ghost"
      aria-label="menu button"
      onClick={() => setOpen((prev: any) => !prev)}
      className="fixed flex items-center justify-center w-[50px] h-[50px] rounded-full left-[25px] top-[25px] bg-white cursor-pointer z-[1] group"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          className="group-hover:stroke-black dark:group-hover:stroke-white"
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="group-hover:stroke-black dark:group-hover:stroke-white"
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          className="group-hover:stroke-black dark:group-hover:stroke-white"
        />
      </svg>
    </Button>
  );
};

export default ToggleButton;
