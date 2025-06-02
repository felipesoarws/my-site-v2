import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

// Imagens
import euaIcon from "../../assets/images/eua_icon.png";
import braIcon from "../../assets/images/bra_icon.png";

// Estilo
import "../styles/fonts.css";

type HeaderProps = {
  path?: string;
};

const Header = ({ path }: HeaderProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "BR" ? "EN" : "BR";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <>
      <header className="z-10 fixed bg-[rgba(15,15,15,0.5)] flex flex-row justify-between backdrop-blur-[8.6px] border rounded-2xl border-solid border-[rgba(17,17,17,0.3)] top-0 w-[100%] py-[.8rem] px-[2rem] translate-x-[-1.7rem] lg:hidden">
        <nav>
          <ul>
            <li className={`${path === "home" ? "hidden" : "block"}`}>
              <Link href="/">
                <ChevronLeft
                  color="var(--light-white)"
                  size={35}
                  strokeWidth={2}
                  className="transition-all duration-[.3s] ease-in-out scale-100 translate-x-[-1rem] lg:translate-x-[-1vw] hover:scale-110"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          {language === "EN" ? (
            <Image
              src={braIcon}
              alt="Português"
              onClick={toggleLanguage}
              className="cursor-pointer neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw] hover:scale-110"
            />
          ) : (
            <Image
              src={euaIcon}
              alt="English"
              onClick={toggleLanguage}
              className="cursor-pointer neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw] hover:scale-110"
            />
          )}
        </div>
      </header>

      <header className=" z-10 fixed lg:w-[45vw] lg:translate-x-[-2vw] lg:py-[1.2vw] lg:px-[2vw] lg:flex flex-row justify-between">
        <Link href="/">
          <nav>
            <ul className="hidden lg:flex">
              <li
                className={`${
                  path === "home" ? "hidden" : "block"
                } bg-[var(--dark-gray)] transition-all duration-[.3s] ease-in-out rounded-full lg:translate-x-[-6.5vw] lg:translate-y-[-1.5vw] lg:p-[.6vw] hover:bg-[#1d1d1d]`}
              >
                <ChevronLeft
                  color="var(--light-white)"
                  size={35}
                  strokeWidth={2}
                  className="transition-all duration-[.3s] ease-in-out scale-100 hover:scale-110"
                />
              </li>
            </ul>
          </nav>
        </Link>

        <div
          className="cursor-pointer hidden bg-[var(--dark-gray)]  items-center justify-center transition-all duration-[.3s] ease-in-out rounded-full lg:flex lg:translate-x-[6.5vw] lg:translate-y-[-1.5vw]  lg:w-[3.5vw] lg:h-[3.5vw] hover:bg-[#1d1d1d]"
          onClick={toggleLanguage}
        >
          {language === "EN" ? (
            <Image
              src={braIcon}
              alt="Português"
              className="cursor-pointer  neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out lg:w-[1.6vw] hover:scale-110"
            />
          ) : (
            <Image
              src={euaIcon}
              alt="English"
              className="cursor-pointer neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out lg:w-[1.6vw] hover:scale-110"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
