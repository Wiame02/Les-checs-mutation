/**
 * NE PAS MODIFIER CE FICHIER
 */

/**
 * Chess is played on a square board of eight rows (called ranks,
 * denoted 1 to 8) and eight columns (called files, denoted a to h).
 */
export type Position = {
    rank: number;
    file: number;
};

/**
 * Creates a new Posistion from two numbers, representing
 * the new position's file and rank.
 *
 * @param rank this position rank, from 0..7
 * @param file this position file, from 0..7
 */
export function position(file: number, rank: number): Position {
    return { rank: rank, file: file };
}

export function bottom(pos: Position): Position {
    return { file: pos.file, rank: pos.rank - 1 } ;
}

export function top(pos: Position): Position {
    return { file: pos.file, rank: pos.rank + 1 };
}

export function left(pos: Position): Position {
    return { file: pos.file - 1, rank: pos.rank };
}

export function right(pos: Position): Position {
    return { file: pos.file + 1, rank: pos.rank };
}

export function equals(one: Position, other: Position): boolean {
    return one.rank === other.rank && one.file === other.file;
}

export function isWhitePosition(pos: Position): boolean {
    return WHITE_POSITIONS.includes(pos);
}

export function isRedPosition(pos: Position): boolean {
    return RED_POSITIONS.includes(pos);
}

export function isYellowPosition(pos: Position): boolean {
    return YELLOW_POSITIONS.includes(pos);
}

export function isBluePosition(pos: Position): boolean {
    return BLUE_POSITIONS.includes(pos);
}

export function isGreyPosition(pos: Position): boolean {
    return GREY_POSITIONS.includes(pos);
}

export const NULL_POSITION = position(-1, -1);

export const A1: Position = position(0, 0); // A1
export const A2: Position = position(0, 1); // A2
export const A3: Position = position(0, 2); // A3
export const A4: Position = position(0, 3); // A4
export const A5: Position = position(0, 4); // A5
export const A6: Position = position(0, 5); // A6
export const A7: Position = position(0, 6); // A7
export const A8: Position = position(0, 7); // A8

export const B1: Position = position(1, 0); // B1
export const B2: Position = position(1, 1); // B2
export const B3: Position = position(1, 2); // B3
export const B4: Position = position(1, 3); // B4
export const B5: Position = position(1, 4); // B5
export const B6: Position = position(1, 5); // B6
export const B7: Position = position(1, 6); // B7
export const B8: Position = position(1, 7); // B8

export const C1: Position = position(2, 0); // C1
export const C2: Position = position(2, 1); // C2
export const C3: Position = position(2, 2); // C3
export const C4: Position = position(2, 3); // C4
export const C5: Position = position(2, 4); // C5
export const C6: Position = position(2, 5); // C6
export const C7: Position = position(2, 6); // C7
export const C8: Position = position(2, 7); // C8

export const D1: Position = position(3, 0); // D1
export const D2: Position = position(3, 1); // D2
export const D3: Position = position(3, 2); // D3
export const D4: Position = position(3, 3); // D4
export const D5: Position = position(3, 4); // D5
export const D6: Position = position(3, 5); // D6
export const D7: Position = position(3, 6); // D7
export const D8: Position = position(3, 7); // D8

export const E1: Position = position(4, 0); // E1
export const E2: Position = position(4, 1); // E2
export const E3: Position = position(4, 2); // E3
export const E4: Position = position(4, 3); // E4
export const E5: Position = position(4, 4); // E5
export const E6: Position = position(4, 5); // E6
export const E7: Position = position(4, 6); // E7
export const E8: Position = position(4, 7); // E8

export const F1: Position = position(5, 0); // F1
export const F2: Position = position(5, 1); // F2
export const F3: Position = position(5, 2); // F3
export const F4: Position = position(5, 3); // F4
export const F5: Position = position(5, 4); // F5
export const F6: Position = position(5, 5); // F6
export const F7: Position = position(5, 6); // F7
export const F8: Position = position(5, 7); // F8

export const G1: Position = position(6, 0); // G1
export const G2: Position = position(6, 1); // G2
export const G3: Position = position(6, 2); // G3
export const G4: Position = position(6, 3); // G4
export const G5: Position = position(6, 4); // G5
export const G6: Position = position(6, 5); // G6
export const G7: Position = position(6, 6); // G7
export const G8: Position = position(6, 7); // G8

export const H1: Position = position(7, 0); // H1
export const H2: Position = position(7, 1); // H2
export const H3: Position = position(7, 2); // H3
export const H4: Position = position(7, 3); // H4
export const H5: Position = position(7, 4); // H5
export const H6: Position = position(7, 5); // H6
export const H7: Position = position(7, 6); // H7
export const H8: Position = position(7, 7); // H8

/* eslint-disable prettier/prettier*/
const WHITE_POSITIONS  = [A2, B2, C2, D2, E2, F2, G2, H2, A7, B7, C7, D7, E7, F7, G7, H7]
const RED_POSITIONS    = [A1, A8, H1, H8, A8, B4, B5, G4, G5];
const YELLOW_POSITIONS = [B1, G1, B3, C3, D3, E3, F3, G3, C4, F4, C5, F5, B6, C6, D6, E6, F6, G6, B8, G8];
const BLUE_POSITIONS   = [C1, F1, A4, D4, E4, H4, A5, D5, E5, H5, C8, F8];
const GREY_POSITIONS   = [D1, E1, A3, H3, A6, H6, D8, E8];
/* eslint-enable */
