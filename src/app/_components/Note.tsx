import React from "react";
import { trebleNotePositions } from "../_utility/notePositions";
import type { NoteName } from "../_types/noteName";

export interface NoteProps {
  note: NoteName;
  duration?: "whole" | "quarter";
  position?: number;
}

const Note = ({ note, duration = "quarter", position }: NoteProps) => {
  const yPos = trebleNotePositions[note] ?? 0; // TODO: Update with other clefs
  const xPos = position ?? 0;

  // Characters
  const quarterNote = "𝅘𝅥";
  const wholeNote = "𝅗";

  const noteCharacter = duration === "quarter" ? quarterNote : wholeNote;

  // Determine the stem direction based on the note pitch TODO: Account for other clefs
  const isUpstem = duration === "quarter" && yPos < trebleNotePositions.B4;

  return (
    <span
      className={`font-music absolute text-4xl text-black hover:text-red-950 `}
      style={{ left: `${xPos}px`, top: `${yPos - 23}px` }}
    >
      <span className={isUpstem ? "" : "rotate-180 transform"}>
        {noteCharacter}
      </span>
    </span>
  );
};

export default Note;
