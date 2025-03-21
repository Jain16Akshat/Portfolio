import React from "react";
import Layout from "./components/global/Layout";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";
import SkillSection from "./components/sections/SkillSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import CodingPlatform from "./components/sections/CodingPlatform";

export default function App() {
  return (
    <Layout>
      <div id="home">
        <HeroSection />
      </div>
      <div className="relative">
        <CodingPlatform />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillSection />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      <FooterSection />
    </Layout>
  );
}
