"use client";

import { useEffect, useState } from "react";

// styles
import "../styles/fonts.css";
import "../styles/globals.css";

// components
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import WorkAndEducation from "../components/WorkAndEducation";
import Footer from "../components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage("BR");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#111111] relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 w-[100%] lg:border lg:border-[#1d1d1d] lg:rounded-[.8vw] lg:w-[45vw] lg:py-[1.5vw]">
        <Header path={"home"} setLang={setLanguage} />
        <main className="my-8 lg:mt-[3.7vw]">
          <AboutMe lang={language} />
          <Technologies lang={language} />
          <Projects lang={language} />
          <WorkAndEducation lang={language} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
