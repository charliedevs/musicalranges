import type { NoteName } from "../_types/noteName";

// prettier-ignore
export const notePositions: Record<NoteName, number> = {
  A0: 165, B0: 160,
  C1: 155, D1: 150, E1: 145, F1: 140, G1: 135, A1: 130, B1: 125,
  C2: 120, D2: 115, E2: 110, F2: 105, G2: 100, A2: 95, B2: 90,
  C3: 85, D3: 80, E3: 75, F3: 70, G3: 65, A3: 60, B3: 55,
  C4: 50, D4: 45, E4: 40, F4: 35, G4: 30, A4: 25, B4: 20,
  C5: 15, D5: 10, E5: 5, F5: 0, G5: -5, A5: -10, B5: -15,
  C6: -20, D6: -25, E6: -30, F6: -35, G6: -40, A6: -45, B6: -50,
  C7: -55, D7: -60, E7: -65, F7: -70, G7: -75, A7: -80, B7: -85,
  C8: -90
};

export const getLedgerLines = (note: NoteName) => {
  const notePosition = notePositions[note];

  // Only consider notes that aren't on staff
  // TODO: consider other clefs
  const isAboveG5 = notePosition < notePositions.G5;
  const isBelowD4 = notePosition > notePositions.D4;

  const ledgerlineCount = isAboveG5
    ? Math.ceil((notePositions.G5 - notePosition) / 10)
    : isBelowD4
      ? Math.ceil((notePosition - notePositions.D4) / 10)
      : 0;

  return Array.from({ length: ledgerlineCount }, (_, index) => index + 1);
};

export const isOnLedgerLine = (note: NoteName) => {
  const notePosition = notePositions[note];

  // Disregard notes on staff
  // TODO: consider other clefs
  const staffStart = notePositions.D4;
  const staffEnd = notePositions.G5;
  if (notePosition >= staffStart && notePosition <= staffEnd) return false;

  // Get note position offset from staff line
  const offset =
    notePosition > staffEnd
      ? notePosition - staffEnd
      : staffStart - notePosition;

  // Use fact that natural notes are separated multiples of 5
  // to determine if note is on space or line.
  return offset % 10 === 0;
};
