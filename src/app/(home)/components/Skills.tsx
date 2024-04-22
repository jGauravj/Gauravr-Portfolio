"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "React js",
      Icon: SiReact,
    },
    {
      text: "Next js",
      Icon: SiNextdotjs,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "SASS & SCSS",
      Icon: SiSass,
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },

    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Vs Code",
      Icon: TbBrandVscode,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer hover:rotate-0 transition-all duration-500"
      />

      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
