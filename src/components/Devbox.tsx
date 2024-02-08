import { Avatar, AvatarImage } from "./ui/avatar";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import avatarImage from "../assets/avatar2.webp";
import { motion } from "framer-motion";

export const Devbox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: "-30deg" }}
      animate={{ opacity: 100, rotateX: "0deg" }}
      transition={{ delay: 0.2 }}
      className="sm:sticky sm:top-6 p-6 pb-0 sm:pb-6 sm:max-w-sm h-fit sm:border rounded-lg"
    >
      <div className="flex flex-col items-start gap-4 text-sm">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotateY: "-90deg" }}
              animate={{ opacity: 1, rotateY: "0deg" }}
              transition={{ delay: 1 }}
              className="absolute -right-14 top-0"
            >
              <Badge className="pl-14 py-1 font-bold">Web Dev</Badge>
            </motion.div>
            <Avatar className="w-32 h-32 border-4 border-primary">
              {avatarImage ? (
                <AvatarImage
                  className="grayscale scale-125"
                  src={avatarImage}
                />
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </Avatar>
            <a
              href="mailto:toma98vlad@gmail.com"
              className="group absolute hover:h-fit hover:w-fit w-4 h-4 bg-blue-300 rounded-full hover:rounded-lg right-3 bottom-2 animate-bounce hover:animate-none transition-all cursor-pointer hover:px-2 hover:py-1 overflow-hidden"
            >
              <span className="group-hover:w-8 w-0 opacity-0 group-hover:opacity-100 font-bold text-muted text-xs pointer-events-none">
                OPEN FOR WORK
              </span>
            </a>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl">Vlad Toma</span>
            <a
              className="font-bold text-muted-foreground"
              href="mailto:toma98vlad@gmail.com"
            >
              toma98vlad@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          <Badge className="font-bold">JavaScript</Badge>
          <Badge className="font-bold">React.js</Badge>
          <Badge className="font-bold">Node.js</Badge>
          <Badge className="font-bold">Redux</Badge>
          <Badge className="font-bold">TailwindCSS</Badge>
          <Badge className="font-bold">MongoDB</Badge>
          <Badge className="font-bold">Express.js</Badge>
          <Badge className="font-bold">API</Badge>
          <Badge className="font-bold">GIT</Badge>
          <Badge className="font-bold">Framer Motion</Badge>
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          <Badge className="font-bold text-white bg-red-400 hover:bg-red-300">
            Adobe Photoshop
          </Badge>
          <Badge className="font-bold text-white bg-red-400 hover:bg-red-300">
            Figma
          </Badge>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 items-start">
          <span className="text-xl font-bold">Bio</span>
          <div className="flex gap-2">
            <span className="text-lg">👋</span>
            <span className="text-left text-muted-foreground italic">
              I'm a web developer with more than 5 years of experience.
              Passionate about crafting user-friendly interfaces and pushing the
              boundaries of web development. Let's build something awesome
              together!
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a target="_blank" href="https://github.com/yattsu">
                  <FaGithub className="w-6 h-6 hover:opacity-60 transition-all" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>github.com/yattsu</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vlad-toma/"
                >
                  <FaLinkedin className="w-6 h-6 hover:opacity-60 transition-all" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>linkedin.com/in/vlad-toma</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};
