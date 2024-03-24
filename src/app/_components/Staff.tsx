import { Clef } from "./Clef";
import Note from "./Note";
import type { NoteName } from "../_types/noteName";

interface StaffProps {
  clef: "treble" | "bass";
  notes: NoteName[];
}

export const clefWidth = 50;

const staffLines = [1, 2, 3, 4, 5];
const noteSpacing = 50;

const Staff = ({ clef, notes }: StaffProps) => {
  const staffWidth = Math.max(100, notes.length * noteSpacing + clefWidth);

  return (
    <div>
      <div className="relative w-full">
        <svg
          width={staffWidth}
          height="100"
          className="absolute left-1/2 top-0 -translate-x-1/2 transform"
          xmlns="http://www.w3.org/2000/svg"
        >
          {staffLines.map((line) => (
            <line
              key={line}
              x1="0"
              y1={`${line * 10}`}
              x2={staffWidth}
              y2={`${line * 10}`}
              stroke="black"
            />
          ))}
        </svg>
        <div
          style={{ width: `${staffWidth}px`, height: "100px" }}
          className="absolute left-1/2 top-0 -translate-x-1/2 transform"
        >
          <Clef clef={clef} />
          {notes.map((note, index) => (
            <Note
              key={index}
              note={note}
              position={index * noteSpacing + clefWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
