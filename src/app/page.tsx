import Staff from "./_components/Staff";
import type { NoteName } from "./_types/noteName";

export default function HomePage() {
  const notes: NoteName[] = [
    "A3",
    "B3",
    "C4",
    "D4",
    "E4",
    "F4",
    "B4",
    "E5",
    "F5",
    "G5",
    "A5",
    "B5",
    "C6",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>Music Staff</h1>
      <Staff clef="treble" notes={notes} />
    </main>
  );
}
