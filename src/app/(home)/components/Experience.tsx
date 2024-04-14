import React from "react";
import { BackgroundGradientDemo } from "@/components/ui/BackgroundGradientDemo";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="flex flex-col  gap-12 mb-14">
      <Title
        text="Experience"
        className="flex flex-col items-center justify-center rotate-6 cursor-pointer hover:rotate-0 transition-all duration-500"
      />
      <BackgroundGradientDemo />
    </div>
  );
};

export default Experience;
