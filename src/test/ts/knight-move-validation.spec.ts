import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestKnightMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical(): void {
        // TODO:
        // Check the following moves are possible:

    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal(): void {
        // TODO:
    }

    @Test('A Knight can leap other pieces')
    testCanLeapOtherPieces(): void {
        // TODO:
    }

    @Test('A Knight cannot move diagonally')
    testCannotMoveDiagonally(): void {
        // TODO:
    }

    @Test('A Knight cannot move horizontally')
    testCannotMoveHorizontally(): void {
        // TODO:
    }

    @Test('A Knight cannot move vertically')
    testCannotMoveVertically(): void {
        // TODO:
    }

    @Test('A Knight can capture a piece from another color')
    testCanCaptureAnotherColor(): void {
        // TODO:
    }

    @Test('A Knight cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }
}
