import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestPawnInYellowCaseMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn can move two squares horizontally and one square vertically')
    testCanMoveThreeHorizontalAndOneVertical(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn can move two squares vertically and one square horizontally')
    testCanMoveThreeVerticalAndOneHorizontal(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn can leap other pieces')
    testCanLeapOtherPieces(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn cannot move diagonally')
    testCannotMoveDiagonally(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn cannot move horizontally')
    testCannotMoveHorizontally(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn cannot move vertically')
    testCannotMoveVertically(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn can capture a piece from another color')
    testCanCaptureAnotherColor(): void {
        // TODO:
    }

    @Test('In a yellow case, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }
}
