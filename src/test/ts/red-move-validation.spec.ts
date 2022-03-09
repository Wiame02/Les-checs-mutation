import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestPawnInRedCaseMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn can move horizontally')
    testCanMoveHorizontally(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn can move vertically')
    testCanMoveVertically(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn cannot move diagonally')
    testCannotMoveDiagonally(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn can capture a piece from different color')
    testCanCaptureDifferentColor(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn cannot leap other pieces, when moving horizontally')
    testCannotLeapHorizontally(): void {
        // TODO:
    }

    @Test('In a red case, a Pawn cannot leap other pieces, when moving vertically')
    testCannotLeapvertically(): void {
        // TODO:
    }
}
