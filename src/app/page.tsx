import Staff from "./_components/Staff";
import type { NoteName } from "./_types/noteName";

export default function HomePage() {
  const notes: NoteName[] = ["F4", "B4", "A4"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>Music Staff</h1>
      <Staff clef="treble" notes={notes} />
    </main>
  );
}
