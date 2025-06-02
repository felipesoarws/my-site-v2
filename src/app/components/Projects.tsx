"use client";

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
import ProjectHoverEffect from "@/app/components/ProjectHoverEffect";

import { CircleFadingPlus } from "lucide-react";

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
  const [filteredProjectsInput, setFilteredProjectsInput] =
    useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [isFilterByYearOpen, setIsFilterByYearOpen] = useState<boolean>(false);

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

  const projectsPerYears = [
    ...new Set(projects.map((project) => project.builtYear)),
  ];

  const checkProjectsYear = (
    e: React.ChangeEvent<HTMLInputElement>,
    year: number
  ) => {
    setFilteredProjectsInput("");

    const checked = e.target.checked;

    setSelectedYears((prevSelectedYears) => {
      if (checked) {
        const updated = [...prevSelectedYears, year];

        filterProjects(updated);
        return updated;
      } else {
        const updated = prevSelectedYears.filter((y) => y !== year);

        filterProjects(updated);
        return updated;
      }
    });
  };

  const filterProjects = (years: number[]) => {
    if (years.length === 0) {
      const sorted = projects.sort((a, b) => b.builtYear - a.builtYear);

      setFilteredProjects(sorted);
      return;
    }

    const filtered = projects.filter((project) =>
      years.includes(project.builtYear)
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
        <div className="relative flex items-center gap-2 mt-1 lg:gap-[.5vw] lg:mt-[.8vw]">
          <input
            onChange={(e) => handleProjectsInput(e.target.value)}
            value={filteredProjectsInput}
            type="text"
            placeholder={lang === "BR" ? "Filtrar projetos" : "Filter projects"}
            className="w-full border border-[#1d1d1d] text-[var(--light-white)] bg-transparent rounded-md p-3 text-[.9rem] lg:text-[.95vw] lg:rounded-[.6vw] lg:py-[.4vw] lg:px-[.8vw]"
          />

          <button
            className="flex items-center justify-center gap-2 cursor-pointer border border-[#1d1d1d] text-[var(--light-white)] transition-all duration-[.3s] ease-in-out bg-transparent rounded-md p-3 text-[.9rem] lg:text-[.95vw] lg:rounded-[.6vw] lg:py-[.4vw] lg:px-[.8vw] lg:gap-[.6vw] hover:bg-[#1d1d1d]"
            onClick={() => setIsFilterByYearOpen(!isFilterByYearOpen)}
          >
            <CircleFadingPlus size={18} color="var(--light-white)" />
            {lang === "BR" ? <>Ano</> : <>Year</>}
          </button>

          {isFilterByYearOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--dark-gray)] flex flex-col gap-2 absolute rounded-[.6rem]  p-[.8rem]  right-0 bottom-[120%] border border-[#1d1d1d] text-[var(--light-white)] lg:rounded-[.6vw]  lg:p-[.8vw] lg:gap-[.5vw]"
            >
              {projectsPerYears.map((year, id) => (
                <div
                  key={id}
                  className="flex items-center justify-start gap-2 lg:gap-[.5vw]"
                >
                  <div className="inline-flex items-center">
                    <label className="flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[var(--light-gray)] checked:bg-[var(--light-white)] checked:border-[var(--light-white)]"
                        checked={selectedYears.includes(year)}
                        onChange={(e) => checkProjectsYear(e, year)}
                      />
                      <span className="absolute text-[var(--dark-gray)] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <span className="text-[.9rem] lg:text-[.9vw]">{year}</span>
                </div>
              ))}
            </motion.div>
          )}
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

          <CarouselContent className="min-[375px]:h-[55vh] min-[390px]:h-[41vh] md:h-fit">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, id) => (
                <CarouselItem key={id} className=" md:basis-1/2">
                  <ProjectHoverEffect
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1200}
                    playOnce={true}
                  >
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
                  </ProjectHoverEffect>
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
      <span className="absolute bottom-[-.5rem] right-0 font-bold text-[#a5a4a710] text-[2rem] py-[.1rem] px-[.4rem] lg:py-[.1vw] lg:px-[.4vw] lg:text-[2vw] lg:bottom-[-.5vw]">
        {year}
      </span>
    </div>
  );
};
