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

/*
// Horizontal moves
const moveE4_H4: Move = move(positionE4, positionH4);
const moveE4_A4: Move = move(positionE4, positionA4);

// Vertical moves
const moveE4_E1: Move = move(positionE4, positionE1);
const moveE4_E8: Move = move(positionE4, positionE8);

// Diagonal moves
const moveE4_A8: Move = move(positionE4, positionA8);
const moveE4_B1: Move = move(positionE4, positionB1);
const moveE4_H7: Move = move(positionE4, positionH7);
const moveE4_H1: Move = move(positionE4, positionH1);

// Knight moves
const E4_F7: Move = move(positionE4, positionF7);
const E4_H5: Move = move(positionE4, positionH5);
const E4_F1: Move = move(positionE4, positionF1);
const E4_H3: Move = move(positionE4, positionH3);
const E4_D1: Move = move(positionE4, positionD1);
const E4_B3: Move = move(positionE4, positionB3);
const E4_B5: Move = move(positionE4, positionB5);
const E4_D7: Move = move(positionE4, positionD7);

// Impossible moves
const moveE4_C7: Move = move(positionE4, positionC7);
const moveE4_B2: Move = move(positionE4, positionB2); 
*/
