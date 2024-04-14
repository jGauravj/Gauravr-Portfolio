"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";
import Title from "@/app/(home)/components/Title";

export function BackgroundGradientDemo() {
  return (
    <div>
      
      <BackgroundGradient className="rounded-md max-w-full p-4 sm:p-10 bg-white dark:bg-stone-950 ">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className=" text-xl font-semibold">InfoObjects</h1>
              <p className="text-sm lignt:text-gray-700">
                Frontend Developer & UI/UX Designer
              </p>
            </div>
            <p className="text-sm light:text-gray-700">Jan 2023 - Nov 2023</p>
          </div>
          <div className="flex flex-wrap items-center">
            <h2 className="text-xl font-semibold">Tech Stack -</h2>

            <p className="text-md">
              HTML, CSS, JavaScript, React Js, Tailwind Css, Bootstrap5, Figma,
              Gsap
            </p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
