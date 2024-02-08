import { useEffect, useState } from "react";

import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

export const EnterProgress = ({ setEnterLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const show = setTimeout(() => {
      setProgress(100);
      const charge = setTimeout(() => {
        setEnterLoading(false);
      }, 1200);
      return () => clearTimeout(charge);
    }, 800);
    return () => {
      clearTimeout(show);
    };
  }, []);
  return (
    <motion.div
      className="flex flex-col items-center gap-0 justify-center w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <motion.span
        initial={{ opacity: 0, marginBottom: "0px" }}
        animate={{ opacity: 100, marginBottom: "30px" }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold bg-background w-full py-1"
      >
        <div className="relative text-primary">
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "100%" }}
            transition={{ delay: 0.8, duration: 2 }}
            className="absolute mix-blend-lighten w-full h-full bg-gradient-to-r from-primary via-slate-300 to-primary/80"
          ></motion.div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Hello.
          </motion.span>
        </div>
      </motion.span>
      <Progress value={progress} className="w-[75%] sm:w-[50%]" />
    </motion.div>
  );
};
