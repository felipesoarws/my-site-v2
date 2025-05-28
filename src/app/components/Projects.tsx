import { useEffect, useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//data
import projects from "../../data/projects.json";
import Image from "next/image";

// Types
interface Project {
  id: number;
  projectName: string;
  projectSlug: string;
  projectDescBR: string;
  projectDescEN: string;
  desktopBackground: string;
  builtWith: string[];
  builtYear: number;
}

type ProjectsProps = {
  lang: string;
};

const Projects = ({ lang }: ProjectsProps) => {
  const [, setFilteredProjectsInput] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const sortedProjects = projects.sort((a, b) => b.builtYear - a.builtYear);
    setFilteredProjects(sortedProjects);
  }, []);

  const handleProjectsInput = (input: string) => {
    setFilteredProjectsInput(input);

    if (input.trim() === "") {
      const sorted = projects.sort((a, b) => b.builtYear - a.builtYear);
      setFilteredProjects(sorted);
      return;
    }

    const filtered = projects.filter((project) =>
      project.projectName.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredProjects(filtered);
  };

  return (
    <div
      className="my-4 lg:my-[2vw]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div>
        <div>
          {lang === "BR" ? (
            <h1 className="font-bold text-[var(--light-white)] text-[1.2rem] lg:text-[1.3vw]">
              projetos recentes
            </h1>
          ) : (
            <h1 className="font-bold text-[var(--light-white)] text-[1.2rem] lg:text-[1.3vw]">
              recents projects
            </h1>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1 lg:gap-[1vw] lg:mt-[.8vw]">
          <input
            onChange={(e) => handleProjectsInput(e.target.value)}
            type="text"
            placeholder={lang === "BR" ? "Filtrar projetos" : "Filter projects"}
            className="w-full border border-[#1d1d1d] text-[var(--light-white)] bg-transparent rounded-md p-3 text-[.9rem] lg:text-[.95vw] lg:rounded-[.6vw] lg:py-[.4vw] lg:px-[.8vw]"
          />

          {/*  <button className="border border-[#1d1d1d] text-[var(--light-white)] bg-transparent rounded-md p-3 text-[.9rem] lg:text-[.95vw] lg:rounded-[.6vw] lg:py-[.4vw] lg:px-[.8vw]">
            oi
          </button> */}
        </div>
      </div>
      <div className="my-3 lg:my-[.9vw]">
        {filteredProjects.length < 1 && (
          <div className="my-8 flex itens-center justify-center lg:my-[2vw] ">
            {lang === "BR" ? (
              <h1 className="font-bold text-[var(--light-gray)] text-[.9rem] lg:text-[1vw]">
                Nenhum projeto com esse resultado.
              </h1>
            ) : (
              <h1 className="font-bold text-[var(--light-gray)] text-[.9rem] lg:text-[1vw]">
                No project with this result.
              </h1>
            )}
          </div>
        )}
        <Carousel className="lg:mx-[1.4vw]">
          {filteredProjects.length < 1 ? (
            <></>
          ) : (
            <CarouselPrevious className="cursor-pointer lg:scale-80 lg:translate-x-[.4vw]" />
          )}

          <CarouselContent>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, id) => (
                <CarouselItem key={id} className=" md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.2, delay: id * 0.05 }}
                  >
                    {lang === "BR" ? (
                      <Link href={`/projetos/${project.projectSlug}`}>
                        <ProjectItem
                          cover={project.desktopBackground}
                          title={project.projectName}
                          desc={project.projectDescBR}
                          stacks={project.builtWith}
                          year={project.builtYear}
                        />
                      </Link>
                    ) : (
                      <Link href={`/projetos/${project.projectSlug}`}>
                        <ProjectItem
                          cover={project.desktopBackground}
                          title={project.projectName}
                          desc={project.projectDescEN}
                          stacks={project.builtWith}
                          year={project.builtYear}
                        />
                      </Link>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>

          {filteredProjects.length < 1 ? (
            <></>
          ) : (
            <CarouselNext className="cursor-pointer lg:scale-80 lg:translate-x-[-.4vw]" />
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

type ProjectItemProps = {
  cover: string;
  title: string;
  desc: string;
  stacks: string[];
  year: number;
};

const ProjectItem = ({
  cover,
  title,
  desc,
  stacks,
  year,
}: ProjectItemProps) => {
  return (
    <div className="relative border border-[#1d1d1d] rounded-md p-3 lg:rounded-[.6vw] lg:p-[.6vw] lg:w-[18.3vw]">
      <div>
        <Image
          width={1000}
          height={1000}
          src={cover}
          alt={title}
          className="min-h-[10rem] rounded-md lg:rounded-[.4vw] lg:h-[10vw] w-[100%] object-fill"
        />
      </div>
      <div className="my-3 flex flex-col lg:my-[.5vw]">
        <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[.9vw]">
          {title}
        </h2>
        <p className="text-[var(--light-gray)] leading-4 text-[.9rem] lg:text-[.7vw]">
          {desc}
        </p>
        <div className="my-3 flex gap-2 text-[.8rem] lg:my-[.5vw] lg:gap-[.5vw] lg:text-[.7vw]">
          {stacks.map((stack, id) => (
            <span
              key={id}
              className="font-bold bg-[var(--light-white)] text-[#362323] py-[.1rem] px-[.4rem] rounded-md lg:py-[.1vw] lg:px-[.4vw] lg:rounded-[.5vw]"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <span className="absolute bottom-[-.5rem] right-0 font-bold text-[#a5a4a710] text-[2rem] py-[.1rem] px-[.4rem] lg:py-[.1vw] lg:px-[.4vw] lg:text-[2.5vw] lg:bottom-[-.8vw]">
        {year}
      </span>
    </div>
  );
};
