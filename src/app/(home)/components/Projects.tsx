import React from "react";
import Title from "./Title";
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiGreensock,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Projects = () => {
  const projects = [
    {
      title: "U.S Engineering",
      discreption: "Freelance Project right now in Development phase",
      tech: [SiHtml5, SiCss3, SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "https://usengineering.vercel.app/",
      cover: "/usengineering.png",
      background: "bg-emerald-500",
    },
    {
      title: "Foodzzz",
      discreption: "For Live preview use ALLOW CORS Chrome Extenstion",
      tech: [SiHtml5, SiCss3, SiReact, SiTailwindcss],
      link: "https://foodzzzbygaurav.netlify.app/",
      cover: "/foodzzz.png",
      background: "bg-indigo-500",
    },
    {
      title: "Animated UI",
      tech: [SiHtml5, SiCss3, SiGreensock],
      link: "https://jgauravj.github.io/jranimated.github.io/",
      cover: "/animatedUi.png",
      background: "bg-green-500",
    },
    {
      title: "Portfolio",
      tech: [SiHtml5, SiCss3, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://gauravjangir.vercel.app/",
      cover: "/portfolio.png",
      background: "bg-[#f43f5e]",
    },
    {
      title: "Explore More Projects on GitHub!",
      tech: [],
      link: "https://github.com/jGauravj?tab=repositories",
      cover: "/github.png",
      background: "bg-[#E4D00A]",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6 cursor-pointer hover:rotate-0 transition-all duration-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-3">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <p className="text-base text-semibold">
                      {project.discreption}
                    </p>

                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-6 h-6" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
