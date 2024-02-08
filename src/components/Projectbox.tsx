import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";

export const Projectbox = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: "-30deg" }}
      animate={{ opacity: 100, rotateX: "0deg" }}
      transition={{ delay: 0.4 }}
      className="flex flex-col gap-4 hover:bg-muted transition-colors p-2 rounded-lg"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 flex flex-col justify-center overflow-hidden sm:w-32 sm:h-32 rounded-lg">
          {project.thumbnail ? (
            <img className="object-cover h-full" src={project.thumbnail} />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
        </div>
        <div className="flex flex-col w-32 justify-between grow">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xl font-bold text-left">{project.name}</span>
            <div className="text-left text-muted-foreground line-clamp-2 text-sm sm:text-md sm:line-clamp-3">
              {project.description}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end w-full flex-wrap">
        {project.technologies.map((technology: any) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </motion.div>
  );
};
