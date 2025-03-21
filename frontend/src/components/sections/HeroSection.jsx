import React from "react";
import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; 
import TypingEffect from "@/components/client/TypingEffect";

import heroImage from "@/assets/images/hero.png";
import dottedArrow from "@/assets/elements/dottedArrow.svg";
import TextReveal from "@/components/global/TextReveal";
import SocialIcons from "@/components/hero/SocialIcons";

const HeroSection = () => {
  return (
    <div className="relative">
      <Section className={"!p-0 z-10 relative"}>
        {/* Hero Section */}
        <div className="flex max-tablet-lg:flex-col pt-5 min-h-[75vh] relative">
          {/* Animated Gradient Background */}
          <div className="absolute z-0 top-0 left-0 max-tablet-lg:top-[40%] max-mobile-sm:top-[55%] w-full h-full max-tablet-lg:h-1/2 flex justify-center items-start">
            <div className="relative w-full h-[30%] flex justify-center items-center">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 z-0 transform-gpu overflow-hidden blur-[50px] flex justify-center items-center ">
                <div
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  className="relative inset-0 h-[90%] w-full bg-gradient-to-tr from-accent/10 to-secondary/10 animate-gradient-shift"
                />
              </div>

              {/* Animated Text */}
              <svg
                width="100%"
                height="100%"
                className="absolute top-0 left-0 opacity-100 animate-floating"
              >
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy="0.35em"
                  fontSize="clamp(3rem, 15vw, 9rem)"
                  fontWeight="bold"
                  fill="transparent"
                  className="text-primary stroke-primary stroke-[5px] opacity-10"
                >
                  Akshat Kumar Jain
                </text>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[5%] right-[20%] w-44 max-mobile-lg:top-[25%] max-mobile-lg:ml-[10%]">
          <SocialIcons />
          </div>

          {/* Left Content */}
          <div className="basis-1/2 flex flex-col justify-center items-start gap-2 p-4 z-10 relative">
            <TextReveal>
              <span className="text-4xl font-bold">Hello, It&apos;s me</span>
            </TextReveal>

            <TextReveal className={"bg-primary"}>
              <h1 className="text-6xl font-bold relative text-primary">
                Akshat Kumar Jain
              </h1>
            </TextReveal>

            <TextReveal>
              <TypingEffect
                staticText={"I'm a"}
                words={[
                  "Web Developer",
                  "MERN Stack Developer",
                  "Java Full Stack Developer",
                  "Data Science Engineer",
                ]}
              />
            </TextReveal>

            <TextReveal className={"bg-muted-foreground"}>
              I master in building efficient software applications using MERN
              technologies and Java Springboot.
            </TextReveal>

            <div className="my-3">
              <a href={"https://drive.google.com/file/d/1iv9ergFEyo3TAxSsaz41uH2CG2KGHRX0/view?usp=drive_link"} target="_blank">
                <Button size="lg" className="px-6 py-4 text-lg">
                  My Resume
                </Button>
              </a>
              <a href={"#contact"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="ml-2 px-6 py-4 text-lg"
                >
                  Contact
                </Button>
              </a>
            </div>
          </div>

          <div className="basis-1/2 flex justify-end items-end z-20 max-mobile-lg:mt-10 relative">
            <div>
              <motion.div
                initial={{ rotateX: 90, y: 10, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                }}
                className="relative origin-bottom"
              >
                <img
                  src={heroImage}
                  alt="Akshat"
                  className="w-[90%] drop-shadow-[2px_-2px_2px_rgba(0,0,0,1)]"
                />
              </motion.div>

              <div>
                {/* Dotted Arrow Animation */}
              <motion.div
                animate={{ x: [0, "5px", 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[30%] right-0 max-tablet-lg:top-1/2 max-tablet-lg:left-[10%] max-mobile-lg:top-[45%]  max-mobile-lg:left-[5%] w-20 max-tablet-lg:w-32 max-mobile-lg:w-24 opacity-65 dark:opacity-100 dark:brightness-[3] max-mobile-sm:top-[45%] -rotate-90"
              >
                <img src={dottedArrow} alt="dottedArrow" />
              </motion.div>
              <motion.div
                animate={{ x: [0, "5px", 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[40%] right-0 max-tablet-lg:top-1/2 max-tablet-lg:left-[10%] max-mobile-lg:top-[45%]  max-mobile-lg:left-[5%] w-20 max-tablet-lg:w-32 max-mobile-lg:w-24 opacity-65 dark:opacity-100 dark:brightness-[3] max-mobile-sm:top-[45%] -rotate-90"
              >
                <img src={dottedArrow} alt="dottedArrow" />
              </motion.div>
              <motion.div
                animate={{ x: [0, "5px", 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[50%] right-0 max-tablet-lg:top-1/2 max-tablet-lg:left-[10%] max-mobile-lg:top-[45%]  max-mobile-lg:left-[5%] w-20 max-tablet-lg:w-32 max-mobile-lg:w-24 opacity-65 dark:opacity-100 dark:brightness-[3] max-mobile-sm:top-[45%] -rotate-90"
              >
                <img src={dottedArrow} alt="dottedArrow" />
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;
