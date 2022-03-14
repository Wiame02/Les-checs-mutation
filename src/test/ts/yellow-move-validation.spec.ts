import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import { isMovePossible, Move, move } from "../../main/ts/movements";

let chessboard: Chessboard;

// Valid movements
    // Two horizontal - One vertical
const D3_F4 : Move = move(position.D3, position.F4);
const D3_F2 : Move = move(position.D3, position.F2);
const D3_B4 : Move = move(position.D3, position.B4);
const D3_B2 : Move = move(position.D3, position.B2);

    // One horizontal - Two vertical
const D3_C5 : Move = move(position.D3, position.C5);
const D3_E5 : Move = move(position.D3, position.E5);
const D3_C1 : Move = move(position.D3, position.C1);
const D3_E1 : Move = move(position.D3, position.E1);

// Invalid movements
const D3_F3 : Move = move(position.D3, position.F3);
const D3_D5 : Move = move(position.D3, position.D5);
const D3_F5 : Move = move(position.D3, position.F5);

export class TestPawnInYellowSquareMoves {
    @Setup
    beforeEach(): void {
        // For all test squares, prepare an empty board and put a White Knight in D3 (yellow square)
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.D3, pieces.whitePawn);
    }

    @Test('In a yellow square, a Pawn can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical(): void {
        Expect(isMovePossible(chessboard, D3_B2)).toBeTruthy();
    }

    @Test('In a yellow square, a Pawn can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal(): void {
        Expect(isMovePossible(chessboard, D3_E1)).toBeTruthy();
    }

    @Test('In a yellow square, a Pawn can leap other pieces')
    testCanLeapOtherPieces(): void {
        putPiece(chessboard, position.E3, pieces.blackPawn);
        Expect(isMovePossible(chessboard, D3_F4)).toBeTruthy();
    }

    @Test('In a yellow square, a Pawn cannot move diagonally')
    testCannotMoveDiagonally(): void {
        Expect(isMovePossible(chessboard, D3_F5)).not.toBeTruthy();
    }

    @Test('In a yellow square, a Pawn cannot move horizontally')
    testCannotMoveHorizontally(): void {
        Expect(isMovePossible(chessboard, D3_F3)).not.toBeTruthy();
    }

    @Test('In a yellow square, a Pawn cannot move vertically')
    testCannotMoveVertically(): void {
        Expect(isMovePossible(chessboard, D3_D5)).not.toBeTruthy();
    }

    @Test('In a yellow square, a Pawn can capture a piece from another color')
    testCanCaptureAnotherColor(): void {
        putPiece(chessboard, position.F4, pieces.blackPawn);
        Expect(isMovePossible(chessboard, D3_F4)).toBeTruthy();
    }

    @Test('In a yellow square, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        putPiece(chessboard, position.F4, pieces.whitePawn);
        Expect(isMovePossible(chessboard, D3_F4)).not.toBeTruthy();
    }
}
