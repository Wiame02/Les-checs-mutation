import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';

let chessboard: Chessboard;

export class TestKingMoves {
    @Setup
    beforeEach(): void {
        // TODO:
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare(): void {
        // TODO:
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare(): void {
        // TODO:
    }

    @Test('A King cannot capure pieces from the same color')
    testCannotCaptureSameColor(): void {
        // TODO:
    }

    @Test('A King can capure pieces from a different color')
    testCanCaptureSameColor(): void {
        // TODO:
    }
}
