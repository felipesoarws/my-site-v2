import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

// images
import Me from "../../assets/images/profile.jpg";
import SPFC from "../../../public/spfc.svg";

// icons
import { Github, Mail, Linkedin, FileDown, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type AboutMeProps = {
  lang: string;
};

const AboutMe = ({ lang }: AboutMeProps) => {
  const [isTeamShowingUp, setIsTeamShowingUp] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-start gap-5 lg:gap-[2vw]">
        <Image
          src={Me}
          className="rounded-full w-[4rem] lg:w-[10.5vw]"
          alt="me profile"
        />
        <div className="lg:w-[28vw] lg:mt-[1vw]">
          {lang === "BR" ? (
            <h1 className="neue-bold text-[var(--light-white)] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]">
              Olá, sou Felipe, &#128075;
            </h1>
          ) : (
            <h1 className="neue-bold text-[var(--light-white)] text-[1.2rem] lg:leading-[2.6vw] lg:text-[2.1vw]">
              Hi, I&apos;m Felipe, &#128075;
            </h1>
          )}

          {isTeamShowingUp ? (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.5 }}
              className="z-100 absolute hidden lg:block lg:translate-x-[-1.6vw] lg:translate-y-[1.8vw]"
            >
              <Image
                src={SPFC}
                alt="São Paulo Futebol Clube logo"
                className="lg:w-[1.2vw] transition-all duration-[.3s] ease-in-out"
              />
            </motion.div>
          ) : (
            <></>
          )}

          <div>
            {lang === "BR" ? (
              <p className="neue-reg text-[var(--light-gray)] text-[.9rem] lg:text-[1.1vw]">
                um desenvolvedor frontend de 23 anos apaixonado por{" "}
                <span
                  onMouseEnter={() => setIsTeamShowingUp(true)}
                  onMouseLeave={() => setIsTeamShowingUp(false)}
                  className={`${
                    isTeamShowingUp
                      ? "bg-[red] text-[var(--light-white)]"
                      : "bg-[transparent]"
                  } transition-all duration-[.3s] ease-in-out`}
                >
                  futebol
                </span>
                , música e tecnologia.
              </p>
            ) : (
              <p className="neue-reg text-[var(--light-gray)] text-[.9rem] lg:text-[1.1vw] lg:mr-[3vw]">
                a 23-year-old frontend developer passioned for{" "}
                <span
                  onMouseEnter={() => setIsTeamShowingUp(true)}
                  onMouseLeave={() => setIsTeamShowingUp(false)}
                  className={`${
                    isTeamShowingUp
                      ? "bg-[red] text-[var(--light-white)]"
                      : "bg-[transparent]"
                  } transition-all duration-[.3s] ease-in-out`}
                >
                  football
                </span>
                , music and technology.
              </p>
            )}

            {lang === "BR" ? (
              <p className="neue-reg text-[var(--light-white)] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]">
                São Paulo - Brasil
              </p>
            ) : (
              <p className="neue-reg text-[var(--light-white)] text-[.8rem] lg:text-[1vw] lg:mt-[.4vw]">
                São Paulo - Brazil
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 my-6 lg:gap-[2vw] lg:my-[1.2vw] lg:ml-[.5vw] lg:justify-start">
        <div className="flex items-center gap-3 lg:gap-[.5vw]">
          <a
            href="https://www.instagram.com/devf____/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              color="var(--light-white)"
              size={20}
              strokeWidth={1.5}
              className="scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/felipesoarws/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              color="var(--light-white)"
              size={20}
              strokeWidth={1.5}
              className="scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/felipesoarws/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              color="var(--light-white)"
              size={20}
              strokeWidth={1.5}
              className="scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] hover:scale-110"
            />
          </a>
          <a
            href="mailto:felipesoarwz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail
              color="var(--light-white)"
              size={20}
              strokeWidth={1.5}
              className="scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] hover:scale-110"
            />
          </a>
          <a
            href="https://wa.me/5511978002480?text=Ol%C3%A1,%20tudo%20bem?%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              color="var(--light-white)"
              size={20}
              className="scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] hover:scale-110"
            />
          </a>
        </div>

        <a
          href={`./pdf/curriculo.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-pointer flex items-center transition-all duration-[.3s] ease-in-out scale-100 border border-[var(--light-white)] gap-2 py-1.5 px-4 rounded-[.5rem] lg:py-[.4vw] lg:px-[.8vw] lg:rounded-[.5vw] lg:gap-[.5vw] hover:bg-[#1d1d1d]">
            {lang === "BR" ? (
              <span className="neue-med text-[var(--light-white)] lg:text-[1vw]">
                Currículo
              </span>
            ) : (
              <span className="neue-med text-[var(--light-white)] lg:text-[1vw]">
                Resume
              </span>
            )}

            <FileDown color="var(--light-white)" size={20} strokeWidth={1.5} />
          </button>
        </a>
      </div>
    </>
  );
};

export default AboutMe;
