"use client";
import React from "react";
import { notePositions } from "../_utility/notePositions";
import type { NoteName } from "../_types/noteName";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export interface NoteProps {
  note: NoteName;
  duration?: "whole" | "quarter";
  position?: number;
}

// Note Characters
const quarterNote = "𝅘𝅥";
const wholeNote = "𝅗";

const Note = ({ note, duration = "quarter", position }: NoteProps) => {
  const yPos = notePositions[note] ?? 0; // TODO: Update based on clef?
  const xPos = position ?? 0;

  const noteCharacter = duration === "quarter" ? quarterNote : wholeNote;

  // Determine the stem direction based on the note pitch TODO: Account for other clefs
  const isDownsteam = duration === "quarter" && yPos <= notePositions.B4;
  const noteClasses =
    "block" + (isDownsteam ? " rotate-180 transform origin-bottom" : "");

  // Position notes in correct place on staff
  const yOffset = isDownsteam ? 37 : 23;

  return (
    <span
      className="absolute cursor-pointer font-music text-4xl text-black hover:text-red-950"
      style={{ left: `${xPos}px`, top: `${yPos - yOffset}px` }}
    >
      <Tippy content={note} placement={isDownsteam ? "top" : "bottom"}>
        <span className={noteClasses}>{noteCharacter}</span>
      </Tippy>
    </span>
  );
};

export default Note;
