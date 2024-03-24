"use client";
import React from "react";
import { trebleNotePositions } from "../_utility/notePositions";
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
  const yPos = trebleNotePositions[note] ?? 0; // TODO: Update with other clefs
  const xPos = position ?? 0;

  const noteCharacter = duration === "quarter" ? quarterNote : wholeNote;

  // Determine the stem direction based on the note pitch TODO: Account for other clefs
  const isUpstem = duration === "quarter" && yPos < trebleNotePositions.B4;

  return (
    <Tippy content={note}>
      <span
        className="absolute cursor-pointer font-music text-4xl text-black hover:text-red-950"
        style={{ left: `${xPos}px`, top: `${yPos - 23}px` }}
      >
        <span className={isUpstem ? "" : "rotate-180 transform"}>
          {noteCharacter}
        </span>
      </span>
    </Tippy>
  );
};

export default Note;
