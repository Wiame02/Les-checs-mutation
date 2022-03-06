import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestRookMoves {
    @Setup
    beforeEach(): void {
        // TODO:
        // Initialize an empty chessboard
    }

    @Test('An Rook can move horizontally')
    testCanMoveHorizontally(): void {
        // TODO:
    }

    @Test('A Rook can move vertically')
    testCanMoveVertically(): void {
        // TODO:
    }

    @Test('A Rook cannot move diagonally')
    testCannotMoveDiagonally(): void {
        // TODO:
    }

    @Test('A Rook can capture a piece from different color')
    testCanCaptureDifferentColor(): void {
        // TODO:
    }

    @Test('A Rook cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('A Rook cannot leap other pieces, when moving horizontally')
    testCannotLeapHorizontally(): void {
        // TODO:
    }

    @Test('A Rook cannot leap other pieces, when moving vertically')
    testCannotLeapvertically(): void {
        // TODO:
    }
}
