import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestPawnInGreySquareMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn can move diagonally')
    testCanMoveDiagonally(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn can move horizontally')
    testCanMoveHorizontally(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn can move vertically')
    testCanMoveVertically(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn can only move horizontally, vertically, and diagonally')
    testForbiddenMoves(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn cannot leap other pieces')
    testCannotLeap(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn cannot capure pieces from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('In a grey square, a Pawn can capure pieces from a different color')
    testCanCaptureDifferentColor(): void {
        // TODO:
    }
}
