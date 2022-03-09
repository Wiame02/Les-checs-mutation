import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestPawnMovesInBlueSquares {
    @Setup
    beforeEach(): void {
        // TODO:
        // Initialize an empty chessboard
        // Place a black Pawn on E4
    }

    @Test('In a blue square, a Pawn can move diagonally')
    testCanMoveDiagonally(): void {
        // TODO:
    }

    @Test('In a blue square, a Pawn cannot move horizontally')
    testCannotMoveHorizontally(): void {
        // TODO:
    }

    @Test('In a blue square, a Pawn cannot move vertically')
    testCannotMoveVertically(): void {
        // TODO:
    }

    @Test('In a blue square, a Pawn can capture a piece from another color')
    testCanCaptureDifferentColor(): void {
        // TODO:
    }

    @Test('In a blue square, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('In a blue square, a Pawn cannot leap other pieces')
    testCannotLeapDiagonally(): void {
        // TODO:
    }
}
