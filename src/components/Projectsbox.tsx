import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Projectbox } from "./Projectbox";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { projects } from "@/projects";

export const Projectsbox = () => {
  return (
    <div className="p-4 rounded-lg border grow">
      <div className="flex flex-col gap-2">
        {projects.map((project, idx) => (
          <Drawer>
            <DrawerTrigger>
              <Projectbox project={project} />
            </DrawerTrigger>
            <DrawerContent>
              <div className="sm:flex justify-between gap-16 sm:px-16 py-8 mx-auto w-full">
                <DrawerHeader className="flex flex-col gap-4 px-6 text-left sm:max-w-sm">
                  <DrawerTitle className="text-2xl font-bold">
                    {project.name}
                  </DrawerTitle>
                  <DrawerDescription>{project.description}</DrawerDescription>
                </DrawerHeader>
                <Carousel className="max-w-lg px-6 sm:px-0">
                  <CarouselContent>
                    {project.images.map((image, idx) => (
                      <CarouselItem className="my-auto" key={idx}>
                        {image ? (
                          <img
                            className="rounded-lg max-h-72 sm:h-fit object-cover mx-auto"
                            src={image}
                          />
                        ) : (
                          <Skeleton className="rounded-lg h-72 w-72 object-cover mx-auto" />
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                  <CarouselPrevious />
                </Carousel>
              </div>
            </DrawerContent>
            {projects.length !== idx + 1 && <Separator />}
          </Drawer>
        ))}
      </div>
    </div>
  );
};
