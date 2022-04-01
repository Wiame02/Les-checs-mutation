import { Expect, Test, Setup } from 'alsatian';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import { isMovePossible, Move, move } from "../../main/ts/movements";
import * as pieces from '../../main/ts/piece';

let chessboard: Chessboard;

//Valid Movements
const D1_D2: Move = move(position.D1, position.D2);
//Invalid movements
const D1_D3: Move = move(position.D1, position.D3);

export class TestKingMoves {
    @Setup
    beforeEach(): void {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.D1, pieces.whiteKing);
    }

    @Test('A King can move 1 square in all directions')
    testCanMoveOneSquare(): void {
        Expect(isMovePossible(chessboard, D1_D2)).toBeTruthy();
    }

    @Test('A King cannot move more than 1 square')
    testCannotMoveMoreThanOneSquare(): void {
        Expect(isMovePossible(chessboard, D1_D3)).not.toBeTruthy();
    }

    @Test('A King cannot capure pieces from the same color')
    testCannotCaptureSameColor(): void {
        putPiece(chessboard, position.D2, pieces.whitePawn);
        Expect(isMovePossible(chessboard, D1_D2)).not.toBeTruthy();
    }

    @Test('A King can capure pieces from a different color')
    testCanCaptureSameColor(): void {
        putPiece(chessboard, position.D2, pieces.blackPawn);
        Expect(isMovePossible(chessboard, D1_D2)).toBeTruthy();
    }
}
