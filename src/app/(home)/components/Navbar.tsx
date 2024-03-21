import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/gaurav-jangir-4b2427221/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/jGauravj",
      label: "Github",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl  font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer">
        Jr.Gaurav •ᴗ•
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
