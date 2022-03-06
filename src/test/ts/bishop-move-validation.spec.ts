import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestBishopMoves {
    @Setup
    beforeEach(): void {
        // TODO:
        // Initialize an empty chessboard
        // Place a black Bishop on E4
    }

    @Test('A Bishop can move diagonally')
    testCanMoveDiagonally(): void {
        // TODO:
    }

    @Test('A Bishop cannot move horizontally')
    testCannotMoveHorizontally(): void {
        // TODO:
    }

    @Test('A Bishop cannot move vertically')
    testCannotMoveVertically(): void {
        // TODO:
    }

    @Test('A Bishop can capture a piece from another color')
    testCanCaptureDifferentColor(): void {
        // TODO:
    }

    @Test('A Bishop cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('A Bishop cannot leap other pieces')
    testCannotLeapDiagonally(): void {
        // TODO:
    }
}
