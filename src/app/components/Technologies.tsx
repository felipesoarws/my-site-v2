import { motion } from "framer-motion";

// icons
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiNextdotjs,
  SiSass,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaTiktok } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

// data
import technologiesData from "../../data/technologies.json";
import otherTechnologiesData from "../../data/otherTechnologies.json";

const icons = {
  html: FaHtml5,
  css: FaCss3Alt,
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: BiLogoTypescript,
  tailwind: RiTailwindCssFill,
  javascript: RiJavascriptFill,
  scss: SiSass,
  meta: FaMeta,
  google: SiGoogleads,
  tiktok: FaTiktok,
  analytics: SiGoogleanalytics,
  gtm: SiGoogletagmanager,
};

type IconName = keyof typeof icons;

type Technology = {
  name: string;
  icon: IconName;
};

type TechnologiesProps = {
  lang: string;
};

const Technologies = ({ lang }: TechnologiesProps) => {
  const technologies: Technology[] = technologiesData as Technology[];
  const otherTechnologies: Technology[] = otherTechnologiesData as Technology[];

  return (
    <>
      <div className="lg:my-[2vw]">
        <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
          {lang === "BR" ? "tecnologias" : "technologies"}
        </h1>
        <div className="my-4 lg:my-[.8vw] flex items-center justify-start flex-wrap gap-2 lg:gap-[1vw]">
          {technologies.map((tech, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: id * 0.05 }}
              className="flex items-center justify-center flex-col gap-1 lg:gap-[.3vw] lg:w-[3vw] transition-all duration-[.3s] ease-in-out scale-100 hover:scale-105"
            >
              <IconComponent iconName={tech.icon} color="#f5f4f4" size={30} />
              <span className="neue-reg text-[#a5a4a7] text-[.7rem] lg:text-[.8vw]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:my-[2vw]">
        <h1 className="font-bold text-[#f5f4f4] text-[1.2rem] lg:text-[1.3vw]">
          {lang === "BR" ? "outras..." : "others..."}
        </h1>
        <div className="my-4 lg:my-[.8vw] flex items-center justify-start flex-wrap gap-2 lg:gap-[1.2vw]">
          {otherTechnologies.map((tech, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.8 + id * 0.05 }}
              className="flex items-center justify-center flex-col gap-1 lg:gap-[.5vw] transition-all duration-[.3s] ease-in-out scale-100 hover:scale-105"
            >
              <IconComponent iconName={tech.icon} color="#f5f4f450" size={24} />
              <span className="neue-reg text-[#a5a4a7] text-[.7rem] lg:text-[.7vw]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;

type IconComponentProps = {
  iconName: IconName;
  color?: string;
  size?: number;
};

const IconComponent = ({ iconName, color, size }: IconComponentProps) => {
  const Icon = icons[iconName];

  if (!Icon) return <p>ícone não encontrado</p>;

  return <Icon color={color} size={size} />;
};
