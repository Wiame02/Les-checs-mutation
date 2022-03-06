import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestQueenMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('A Queen can move diagonally')
    testCanMoveDiagonally(): void {
        // TODO:
    }

    @Test('A Queen can move horizontally')
    testCanMoveHorizontally(): void {
        // TODO:
    }

    @Test('A Queen can move vertically')
    testCanMoveVertically(): void {
        // TODO:
    }

    @Test('A Queen can only move horizontally, vertically, and diagonally')
    testForbiddenMoves(): void {
        // TODO:
    }

    @Test('A Queen cannot leap other pieces')
    testCannotLeap(): void {
        // TODO:
    }

    @Test('A Queen cannot capure pieces from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:

    }

    @Test('A Queen can capure pieces from a different color')
    testCanCaptureDifferentColor(): void {
        // TODO:

    }
}
