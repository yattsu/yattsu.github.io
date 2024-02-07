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
      }, 1000);
      return () => clearTimeout(charge);
    }, 1000);
    return () => {
      clearTimeout(show);
    };
  }, []);
  return (
    <motion.div
      className="flex justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 0.3 }}
    >
      <Progress value={progress} className="w-[80%] sm:w-[50%]" />
    </motion.div>
  );
};
