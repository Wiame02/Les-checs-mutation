import * as position from '../../main/ts/position';
import { Move, move } from '../../main/ts/movements';

// Pawn moves
export const A1_A3: Move = move(position.A1, position.A3);
export const A1_A2: Move = move(position.A1, position.A2);
export const A7_A5: Move = move(position.A7, position.A5);
export const A7_A6: Move = move(position.A7, position.A6);
export const A7_B6: Move = move(position.A7, position.B6);

// Pawn invalid moves
export const A7_A8: Move = move(position.A7, position.A8);
export const A7_A4: Move = move(position.A7, position.A4);

// Other moves
export const E4_H4: Move = move(position.E4, position.H4);
export const E4_A4: Move = move(position.E4, position.A4);
export const E4_E1: Move = move(position.E4, position.E1);
export const E4_E8: Move = move(position.E4, position.E8);
export const E4_A8: Move = move(position.E4, position.A8);
export const E4_B1: Move = move(position.E4, position.B1);
export const E4_H7: Move = move(position.E4, position.H7);
export const E4_H1: Move = move(position.E4, position.H1);
export const E4_F7: Move = move(position.E4, position.F7);
export const E4_H5: Move = move(position.E4, position.H5);
export const E4_F1: Move = move(position.E4, position.F1);
export const E4_H3: Move = move(position.E4, position.H3);
export const E4_D1: Move = move(position.E4, position.D1);
export const E4_B3: Move = move(position.E4, position.B3);
export const E4_B5: Move = move(position.E4, position.B5);
export const E4_D7: Move = move(position.E4, position.D7);
export const E4_C7: Move = move(position.E4, position.C7);
export const E4_B2: Move = move(position.E4, position.B2);

// White pwn mouvements
    // Valid movements
export const A2_A3 : Move = move(position.A2, position.A3); //Invalid if a piece is on it
export const A2_A4 : Move = move(position.A2, position.A4);

    // Invalid movements
export const A2_A1 : Move = move(position.A2, position.A1);
export const A2_A5 : Move = move(position.A2, position.A5);
export const A2_B3 : Move = move(position.A2,position.B3);