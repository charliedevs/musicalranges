"use client";
import Tippy from "@tippyjs/react";
import { clefWidth } from "./Staff";

interface ClefProps {
  clef: "treble" | "bass";
}

// Clef Characters
const trebleClef = "𝄞";
const bassClef = "𝄢";

export const Clef = ({ clef }: ClefProps) => {
  const clefCharacter = clef === "treble" ? trebleClef : bassClef;
  return (
    <Tippy content={clef + " clef"}>
      <div
        className="-ml-1 -mt-0.5 cursor-pointer text-6xl text-black hover:text-red-950"
        style={{ width: clefWidth }}
      >
        {clefCharacter}
      </div>
    </Tippy>
  );
};
