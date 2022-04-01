import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import { isMovePossible, Move, move } from "../../main/ts/movements";

let chessboard: Chessboard;

// Valid movements
// Diagonally movements
const D1_A4: Move = move(position.D1, position.A4);
// Horizontal movements
const D1_H1: Move = move(position.D1, position.H1);
// Vertical movements
const D1_D8: Move = move(position.D1, position.D8);
// Invalid movements
const D1_E3: Move = move(position.D1, position.E3);

export class TestPawnInGreySquareMoves {
    @Setup
    beforeEach(): void {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.D1, pieces.whitePawn);
    }

    @Test('In a grey square, a Pawn can move diagonally')
    testCanMoveDiagonally(): void {
        Expect(isMovePossible(chessboard, D1_A4)).toBeTruthy();
    }

    @Test('In a grey square, a Pawn can move horizontally')
    testCanMoveHorizontally(): void {
        Expect(isMovePossible(chessboard, D1_H1)).toBeTruthy();
    }

    @Test('In a grey square, a Pawn can move vertically')
    testCanMoveVertically(): void {
        Expect(isMovePossible(chessboard, D1_D8)).toBeTruthy();

    }

    @Test('In a grey square, a Pawn can only move horizontally, vertically, and diagonally')
    testForbiddenMoves(): void {
        Expect(isMovePossible(chessboard, D1_E3)).not.toBeTruthy();
    }

    @Test('In a grey square, a Pawn cannot leap other pieces')
    testCannotLeap(): void {
        putPiece(chessboard, position.F1, pieces.whitePawn);
        Expect(isMovePossible(chessboard, D1_H1)).not.toBeTruthy();
    }

    @Test('In a grey square, a Pawn cannot capure pieces from the same color')
    testCannotCaptureSameColor(): void {
        putPiece(chessboard, position.H1, pieces.whitePawn);
        Expect(isMovePossible(chessboard, D1_H1)).not.toBeTruthy();
    }

    @Test('In a grey square, a Pawn can capure pieces from a different color')
    testCanCaptureDifferentColor(): void {
        putPiece(chessboard, position.H1, pieces.blackPawn);
        Expect(isMovePossible(chessboard, D1_H1)).toBeTruthy();
    }
}