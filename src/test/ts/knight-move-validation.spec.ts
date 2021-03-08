import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestKnightMoves {
    @Setup
    beforeEach() {
        // TODO:
        // Initialize an empty chessboard
        // Place a white Knight on E4
    }

    @Test('A Knight can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_G3
        // - moveE4_G5
        // - moveE4_C3
        // - moveE4_C5
    }

    @Test('A Knight can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal() {
        // TODO:
        // Check the following moves are possible:
        // - moveE4_F2
        // - moveE4_F6
        // - moveE4_D2
        // - moveE4_D6
    }

    @Test('A Knight can leap other pieces')
    testCanLeapOtherPieces() {
        // TODO:
    }

    @Test('A Knight cannot move diagonally')
    testCannotMoveDiagonally() {
        // TODO:
    }

    @Test('A Knight cannot move horizontally')
    testCannotMoveHorizontally() {
        // TODO:
    }

    @Test('A Knight cannot move vertically')
    testCannotMoveVertically() {
        // TODO:
    }

    @Test('A Knight can capture a piece from another color')
    testCanCaptureAnotherColor() {
        // TODO:
    }

    @Test('A Knight cannot capture a piece from the same color')
    testCannotCaptureSameColor() {
        // TODO:
    }
}
