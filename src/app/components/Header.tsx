import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { ChevronLeft } from "lucide-react";

// images
import euaIcon from "../../assets/images/eua_icon.png";
import braIcon from "../../assets/images/bra_icon.png";

// style
import "../styles/fonts.css";

type HeaderProps = {
  path: string;
  setLang: (lang: string) => void;
};

const Header = ({ path, setLang }: HeaderProps) => {
  const [language, setLanguage] = useState<string>("");
  const langBRRef = useRef<HTMLImageElement>(null);
  const langENRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  const handleLanguage = (lang: "BR" | "EN") => {
    setLanguage(lang);
    setLang(lang);
    localStorage.setItem("language", lang);

    const showRef = lang === "BR" ? langENRef : langBRRef;
    const hideRef = lang === "BR" ? langBRRef : langENRef;

    hideRef.current?.style.setProperty("opacity", "0");
    hideRef.current?.style.setProperty("display", "none");

    showRef.current?.style.setProperty("opacity", "1");
    showRef.current?.style.setProperty("display", "block");
  };

  return (
    <header className="z-10 fixed bg-[rgba(15,15,15,0.5)] flex flex-row justify-between backdrop-blur-[8.6px] border rounded-2xl border-solid border-[rgba(17,17,17,0.3)]  top-0 w-[100%] py-[.8rem] px-[2rem] translate-x-[-1.7rem] lg:w-[45vw] lg:translate-x-[-2vw] lg:py-[1.2vw] lg:px-[2vw] ">
      <nav>
        <ul>
          <li className={`${path == "home" ? "hidden" : "block"} `}>
            <Link href={"/"}>
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
          <>
            <Image
              src={braIcon}
              loading="lazy"
              className={`cursor-pointer neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw] hover:scale-110`}
              onClick={() => handleLanguage("BR")}
              ref={langBRRef}
              alt="BR"
            />
          </>
        ) : (
          <></>
        )}

        {language === "BR" ? (
          <>
            <Image
              src={euaIcon}
              loading="lazy"
              className={`cursor-pointer neue-reg text-[var(--light-white)] block scale-100 transition-all duration-[.3s] ease-in-out w-[1.5rem] lg:w-[1.6vw] hover:scale-110 `}
              onClick={() => handleLanguage("EN")}
              ref={langENRef}
              alt="EN"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
