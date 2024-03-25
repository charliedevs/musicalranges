"use client";
import React from "react";
import {
  getLedgerLines,
  isOnLedgerLine,
  notePositions,
} from "../_utility/notePositions";
import type { NoteName } from "../_types/noteName";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export interface NoteProps {
  note: NoteName;
  duration?: "whole" | "quarter";
  position?: number;
}

const noteWidth = 15;

// Note Characters
const quarterNote = "𝅘𝅥";
const wholeNote = "𝅗";

const Note = ({ note, duration = "quarter", position }: NoteProps) => {
  const yPos = notePositions[note] ?? 0; // TODO: Update based on clef?
  const xPos = position ?? 0;

  const noteCharacter = duration === "quarter" ? quarterNote : wholeNote;

  // Determine the stem direction based on the note pitch TODO: Account for other clefs
  const isDownstem = duration === "quarter" && yPos <= notePositions.B4;
  const noteClasses =
    "block" + (isDownstem ? " rotate-180 transform origin-bottom" : "");

  // Position notes in correct place on staff
  const noteOffset = isDownstem ? -37 : -23;

  // TODO: Determine number of ledger lines
  const ledgerLines = getLedgerLines(note);
  console.log(note, ledgerLines);
  const onLine = isOnLedgerLine(note);
  const ledgerOffset =
    noteOffset + (isDownstem ? (onLine ? -5 : 2) : onLine ? -22 : -17);

  return (
    <div className="absolute" style={{ left: `${xPos}px`, top: `${yPos}px` }}>
      <span
        className="relative cursor-pointer font-music text-4xl text-black hover:text-red-950"
        style={{ top: noteOffset }}
      >
        <Tippy content={note} placement={isDownstem ? "top" : "bottom"}>
          <span className={noteClasses}>{noteCharacter}</span>
        </Tippy>
      </span>
      <span className="relative -z-10" style={{ top: ledgerOffset }}>
        <svg width={noteWidth} xmlns="http://www.w3.org/2000/svg">
          {ledgerLines.map((line) => (
            <line
              key={line}
              x1="0"
              y1={`${line * 10}`}
              x2={`${noteWidth}`}
              y2={`${line * 10}`}
              stroke="black"
            />
          ))}
        </svg>
      </span>
    </div>
  );
};

export default Note;
