import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

// data
import works from "../../data/works.json";
import education from "../../data/education.json";
import Image from "next/image";

type WorkAndEducationProps = {
  lang: string;
};

const WorkAndEducation = ({ lang }: WorkAndEducationProps) => {
  const [focusSection, setFocusSection] = useState<string>("");

  useEffect(() => {
    setFocusSection("education");
  }, []);

  const openSection = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const section = e.target as HTMLButtonElement;

    if (section.innerText === "Experiências" || section.innerText === "Work") {
      return setFocusSection("work");
    } else {
      return setFocusSection("education");
    }
  };

  return (
    <div className="flex flex-col my-8 lg:my-[2vw]">
      <div className="flex items-center justify-center bg-[#ffffff1a] gap-[.3rem] px-[.3rem] py-[.2rem] rounded-[.6rem] lg:gap-[.3vw] lg:px-[.3vw] lg:py-[.2vw] lg:rounded-[.4vw]">
        {lang === "BR" ? (
          <button
            className={`${
              focusSection === "education" ? "bg-[#111111]" : ""
            } cursor-pointer w-[50%] font-bold text-[#f5f4f4] py-[.2rem] rounded-[.6rem] text-[.8rem] lg:py-[.2vw] lg:rounded-[.4vw] lg:text-[.9vw] transition-all duration-[.3s] ease-in-out`}
            onClick={(e) => openSection(e)}
          >
            Educação
          </button>
        ) : (
          <button
            className={`${
              focusSection === "education" ? "bg-[#111111]" : ""
            } cursor-pointer w-[50%] font-bold text-[#f5f4f4] py-[.2rem] rounded-[.6rem] text-[.8rem] lg:py-[.2vw] lg:rounded-[.4vw] lg:text-[.9vw] transition-all duration-[.3s] ease-in-out`}
            onClick={(e) => openSection(e)}
          >
            Education
          </button>
        )}

        {lang === "BR" ? (
          <button
            className={`${
              focusSection === "work" ? "bg-[#111111]" : ""
            } cursor-pointer w-[50%] font-bold text-[#f5f4f4] py-[.2rem] rounded-[.6rem] text-[.8rem] lg:py-[.2vw] lg:rounded-[.4vw] lg:text-[.9vw] transition-all duration-[.3s] ease-in-out`}
            onClick={(e) => openSection(e)}
          >
            Experiências
          </button>
        ) : (
          <button
            className={`${
              focusSection === "work" ? "bg-[#111111]" : ""
            } cursor-pointer w-[50%] font-bold text-[#f5f4f4] py-[.2rem] rounded-[.6rem] text-[.8rem] lg:py-[.2vw] lg:rounded-[.4vw] lg:text-[.9vw] transition-all duration-[.3s] ease-in-out`}
            onClick={(e) => openSection(e)}
          >
            Work
          </button>
        )}
      </div>
      <div className="border border-[#1d1d1d] px-[.5rem] rounded-[.6rem] my-[.8rem] lg:px-[.5vw] lg:rounded-[.4vw] lg:my-[.8vw]">
        <div
          className="ml-10 border-l border-[#1d1d1d] flex flex-col lg:gap-[.8vw]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={focusSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              {(focusSection === "work" ? works : education).map((work, id) => (
                <Section
                  lang={lang}
                  key={id}
                  companyLogo={work.companyLogo}
                  periodBR={work.periodBR}
                  periodEN={work.periodEN}
                  companyNameBR={work.companyNameBR}
                  companyNameEN={work.companyNameEN}
                  positionBR={work.positionBR}
                  positionEN={work.positionEN}
                  functionsBR={work.functionsBR}
                  functionsEN={work.functionsEN}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WorkAndEducation;

type SectionProps = {
  lang: string;
  companyLogo: string;
  periodBR: string;
  companyNameBR: string;
  positionBR: string;
  functionsBR: string[];
  periodEN: string;
  companyNameEN: string;
  positionEN: string;
  functionsEN: string[];
};

const Section = ({
  lang,
  companyLogo,
  periodBR,
  companyNameBR,
  positionBR,
  functionsBR,
  periodEN,
  companyNameEN,
  positionEN,
  functionsEN,
}: SectionProps) => {
  return (
    <div className="flex items-start py-4 translate-x-[-1.2rem] gap-3 lg:py-[1.5vw] lg:translate-x-[-1.2vw] lg:gap-[.8vw]">
      <Image
        src={companyLogo}
        className="border border-[#1d1d1d] h-full w-[2.5rem] lg:w-[2.5vw] rounded-full"
        alt={`${companyNameBR} logo`}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-[.3rem] leading-[.7rem] lg:gap-[.3vw] lg:leading-[.8vw]">
        {lang === "BR" ? (
          <span className="font-medium text-[#a5a4a7] text-[.65rem] lg:text-[.7vw]">
            {periodBR}
          </span>
        ) : (
          <span className="font-medium text-[#a5a4a7] text-[.65rem] lg:text-[.7vw]">
            {periodEN}
          </span>
        )}

        {lang === "BR" ? (
          <h3 className="font-bold text-[#f5f4f4] text-[.9rem] lg:text-[1vw]">
            {companyNameBR}
          </h3>
        ) : (
          <h3 className="font-bold text-[#f5f4f4] text-[.9rem] lg:text-[1vw]">
            {companyNameEN}
          </h3>
        )}

        {lang === "BR" ? (
          <span className="font-medium text-[#a5a4a7] text-[.7rem] lg:text-[.75vw]">
            {positionBR}
          </span>
        ) : (
          <span className="font-medium text-[#a5a4a7] text-[.7rem] lg:text-[.75vw]">
            {positionEN}
          </span>
        )}

        <div className="my-2 lg:my-[.5vw]">
          <ul className="flex flex-col gap-2 ml-4 list-outside list-disc leading-[1rem] lg:ml-[.8vw] lg:gap-[.5vw] ">
            {lang === "BR"
              ? functionsBR.map((func, id) => (
                  <li
                    className="font-medium text-[#d1d5db] text-[.8rem] lg:text-[.75vw]"
                    key={id}
                  >
                    {func}
                  </li>
                ))
              : functionsEN.map((func, id) => (
                  <li
                    className="font-medium text-[#d1d5db] text-[.8rem] lg:text-[.75vw]"
                    key={id}
                  >
                    {func}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
