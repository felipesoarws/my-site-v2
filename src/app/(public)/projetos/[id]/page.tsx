"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Header";

//data
import projects from "@/data/projects.json";

interface ProjectDetails {
  headerBackground: string;
  descriptionBR: string;
  descriptionEN: string;
  extrasLinks?: string[];
  carouselImages?: string[];
}

interface DetailedProject {
  id: number;
  projectName: string;
  projectSlug: string;
  projectDescBR: string;
  projectDescEN: string;
  desktopBackground: string;
  builtWith: string[];
  builtYear: number;
  projectDetails: ProjectDetails[];
  projectLink?: string;
  repository?: string;
}

export default function Projects() {
  const [language, setLanguage] = useState<string>("");
  const [project, setProject] = useState<DetailedProject | undefined>(
    undefined
  );
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }

    const detailedProject = projects.find((p) => p.projectSlug === id);
    setProject(detailedProject);
  }, [id]);

  if (!project)
    return (
      <div className="flex items-center justify-center">
        <div className="bg-[var(--dark-gray)] h-screen relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
          <Header path={"projects"} setLang={setLanguage} />
          <main className="my-8 lg:my-[3.7vw]">
            <div>
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="w-10 h-10 border-4 border-t-transparent border-[var(--light-gray)] rounded-full animate-spin" />
              </div>
            </div>
          </main>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[var(--dark-gray)] relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"projects"} setLang={setLanguage} />
        <main className="my-8 lg:my-[3.7vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              width={1000}
              height={1000}
              src={project.projectDetails[0].headerBackground}
              alt={project.projectName}
              className="select-none pointer-events-none w-[100%] object-fill rounded-md lg:rounded-[.4vw] lg:h-[49vh]"
            />
          </motion.div>
          <div className="my-3 flex flex-col gap-4 lg:my-[1.3vw] lg:gap-[.6vw]">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[2vw]">
                {project.projectName}
              </h2>
              <div className="flex flex-col items-end">
                <div>
                  {language === "BR" ? (
                    <a
                      className="neue-med text-[var(--light-gray)] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[var(--light-white)]"
                      target="_blank"
                      href={project.projectLink}
                    >
                      Acessar site
                    </a>
                  ) : (
                    <a
                      className="neue-med text-[var(--light-gray)] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[var(--light-white)]"
                      target="_blank"
                      href={project.projectLink}
                    >
                      Visit website
                    </a>
                  )}
                </div>
                <div>
                  {project.repository ? (
                    <>
                      {language === "BR" ? (
                        <a
                          className="neue-med text-[var(--light-gray)] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[var(--light-white)]"
                          target="_blank"
                          href={project.repository}
                        >
                          Repositório
                        </a>
                      ) : (
                        <a
                          className="neue-med text-[var(--light-gray)] text-[1rem] transition-all duration-700 ease-in-out underline underline-offset-4 lg:text-[1.1vw] hover:text-[var(--light-white)]"
                          target="_blank"
                          href={project.repository}
                        >
                          Repository
                        </a>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="mr-[1rem] lg:mr-[15vw]">
              {language === "BR" ? (
                <>
                  <h2 className="text-[var(--light-gray)] neue-med leading-4 text-[1rem] lg:text-[1.2vw]  lg:leading-[1.2vw]">
                    {project.projectDescBR}
                  </h2>
                </>
              ) : (
                <h2 className="text-[var(--light-gray)] neue-med  leading-4 text-[1rem] lg:text-[1.2vw]  lg:leading-[1.2vw]">
                  {project.projectDescEN}
                </h2>
              )}
            </div>
            <div className="w-full flex items-start justify-center flex-col gap-4 mr-[2rem] lg:mr-[5vw] lg:gap-[2vw] lg:mt-[.8vw]">
              <div>
                {language === "BR" ? (
                  <>
                    <p className="text-[var(--light-gray)] leading-4 text-[.8rem] lg:text-[1vw] lg:leading-[1.2vw]">
                      {project.projectDetails[0]?.descriptionBR}
                    </p>
                  </>
                ) : (
                  <p className="text-[var(--light-gray)] leading-4 text-[.8rem] lg:text-[1vw] lg:leading-[1.2vw]">
                    {project.projectDetails[0]?.descriptionEN}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between lg:flex-row">
              {project.projectDetails[0]?.extrasLinks ? (
                <>
                  <div className="my-[1rem] lg:my-[1.8vw] ">
                    <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[1.5vw]">
                      Extras
                    </h2>
                    <div className="flex flex-col">
                      {project.projectDetails[0]?.extrasLinks?.map(
                        (link, id) => (
                          <a
                            className="block text-[.9rem] lg:text-[1vw] text-[var(--light-gray)]"
                            target="_blank"
                            href={link}
                            key={id}
                          >
                            {link}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <div className="my-[1rem] lg:my-[1.8vw] text-left lg:text-right">
                    {language === "BR" ? (
                      <>
                        <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[1.5vw]">
                          Tecnologias
                        </h2>
                        <div className="flex flex-col">
                          {project.builtWith.map((tech, id) => (
                            <span
                              key={id}
                              className="block text-[var(--light-gray)] text-[.8rem] lg:text-[1vw] "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[1.5vw]">
                          Technologies
                        </h2>
                        <div className="flex flex-col">
                          {project.builtWith.map((tech, id) => (
                            <span
                              key={id}
                              className="block text-[var(--light-gray)] text-[.8rem] lg:text-[1vw] "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="my-[1rem] lg:my-[1.8vw] text-left">
                  {language === "BR" ? (
                    <>
                      <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[1.5vw]">
                        Tecnologias
                      </h2>
                      <div className="flex flex-col">
                        {project.builtWith.map((tech, id) => (
                          <span
                            key={id}
                            className="block text-[var(--light-gray)] text-[.9rem] lg:text-[1vw] "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="font-bold text-[var(--light-white)] text-[1rem] lg:text-[1.5vw]">
                        Technologies
                      </h2>
                      <div className="flex flex-col">
                        {project.builtWith.map((tech, id) => (
                          <span
                            key={id}
                            className="block text-[var(--light-gray)] text-[.8rem] lg:text-[1vw] "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {project.projectDetails[0]?.carouselImages ? (
            <div className="relative w-full gap-4 ">
              <Carousel>
                <CarouselPrevious className="z-1000 cursor-pointer translate-x-[2.5rem] lg:scale-80 lg:translate-x-[2.5vw]" />
                <CarouselContent>
                  {project.projectDetails[0]?.carouselImages.map(
                    (slide, id) => (
                      <CarouselItem
                        key={id}
                        className="translate-x-[.5rem] lg:translate-x-[.5vw] px-2 lg:px-[3vw]"
                      >
                        <Image
                          height={1000}
                          width={1000}
                          key={id}
                          src={slide}
                          className={`select-none pointer-events-none w-full h-full object-cover transition-all duration-700 ease-in-out rounded-md lg:rounded-[.8vw]`}
                          alt="carousel"
                        />
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselNext className="z-1000 translate-x-[-2.5rem] cursor-pointer lg:scale-80 lg:translate-x-[-2.5vw]" />
              </Carousel>
            </div>
          ) : (
            <></>
          )}
        </main>
        <Footer path="" setLang={() => ""} />
      </div>
    </div>
  );
}
