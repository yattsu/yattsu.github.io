import "./App.css";

import { Devbox } from "./components/Devbox";
import { EnterProgress } from "./components/EnterProgress";
import { Projectsbox } from "./components/Projectsbox";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [enterLoading, setEnterLoading] = useState(true);
  return (
    <div className="flex justify-center p-0 sm:p-6">
      {enterLoading ? (
        <div className="absolute flex flex-col top-0 left-0 items-center justify-center w-screen h-screen">
          <EnterProgress setEnterLoading={setEnterLoading} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, translateY: "30px" }}
          animate={{ opacity: 100, translateY: "0px" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
        >
          <Devbox />
          <Projectsbox />
        </motion.div>
      )}
    </div>
  );
}

export default App;
