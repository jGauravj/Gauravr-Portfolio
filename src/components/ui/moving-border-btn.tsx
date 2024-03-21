"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderBtn() {
  return (
    <div>
      <Button
        borderRadius="0.5rem"
        className=" p-3 font-semibold w-[11rem] text-center bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        📄 Available for work
      </Button>
    </div>
  );
}
