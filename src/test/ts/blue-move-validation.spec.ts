import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import { isMovePossible, Move, move } from "../../main/ts/movements";

let chessboard: Chessboard;

// Valid movements
const E4_H7 : Move = move(position.E4, position.H7);
const E4_G6 : Move = move(position.E4, position.G6);

// Invalid movements
const E4_E5 : Move = move(position.E4,position.E5);
const E4_A4 : Move = move(position.E4,position.A4);

export class TestPawnMovesInBlueSquares {

    @Setup
    beforeEach(): void {
        // For all test squares, prepare an empty board and put a White Bishop in E4 (blue square)
        chessboard = createEmptyChessboard();
        putPiece(chessboard,position.E4,pieces.whitePawn)
    }

    @Test('In a blue square, a Pawn can move diagonally')
    testCanMoveDiagonally(): void {
        Expect(isMovePossible(chessboard, E4_H7)).toBeTruthy();
    }

    @Test('In a blue square, a Pawn cannot move horizontally')
    testCannotMoveHorizontally(): void {
        Expect(isMovePossible(chessboard,E4_E5)).not.toBeTruthy();
    }

    @Test('In a blue square, a Pawn cannot move vertically')
    testCannotMoveVertically(): void {
        Expect(isMovePossible(chessboard,E4_A4)).not.toBeTruthy();
    }

    @Test('In a blue square, a Pawn can capture a piece from another color')
    testCanCaptureDifferentColor(): void {
        putPiece(chessboard, position.G6, pieces.blackPawn);
        Expect(isMovePossible(chessboard, E4_G6)).toBeTruthy();
    }

    @Test('In a blue square, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        putPiece(chessboard, position.G6, pieces.whitePawn);
        Expect(isMovePossible(chessboard, E4_G6)).not.toBeTruthy();
    }

    @Test('In a blue square, a Pawn cannot leap other pieces')
    testCannotLeapDiagonally(): void {
        putPiece(chessboard,position.G6,pieces.whitePawn);
        Expect(isMovePossible(chessboard,E4_H7)).not.toBeTruthy();
    }
}
