import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import { isMovePossible, Move, move } from "../../main/ts/movements";
import * as position from '../../main/ts/position';

let chessboard: Chessboard;

export class TestPawnInRedSquareMoves {
    @Setup
    beforeEach(): void {
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.B4, pieces.whitePawn);

    }

    @Test('In a red square, a Pawn can move horizontally')
    testCanMoveHorizontally(): void {
        const moveB4_A4 : Move  = move (position.B4,position.A4); 
        Expect(isMovePossible(chessboard, moveB4_A4)).toBeTruthy();

    }

    @Test('In a red square, a Pawn can move vertically')
    testCanMoveVertically(): void {
        const moveB4_B5 : Move  = move (position.B4,position.B5); 
        Expect (isMovePossible(chessboard,moveB4_B5 )).toBeTruthy(); 
    }

    @Test('In a red square, a Pawn cannot move diagonally')
    testCannotMoveDiagonally(): void {
        const moveB4_A5 : Move  = move (position.B4,position.A5); 
        Expect (isMovePossible(chessboard,moveB4_A5 )).toBeTruthy();
    }

    @Test('In a red square, a Pawn can capture a piece from different color')
    testCanCaptureDifferentColor(): void {
        const moveB4_C4 : Move  = move (position.B4,position.C4); 
        putPiece(chessboard, position.C4, pieces.blackPawn);
        Expect (isMovePossible(chessboard,moveB4_C4 )).toBeTruthy();
    }

    @Test('In a red square, a Pawn cannot capture a piece from the same color')
    testCannotCaptureSameColor(): void {
        const moveB4_C4 : Move  = move (position.B4,position.C4); 
        putPiece(chessboard, position.C4, pieces.whitePawn);
        Expect(isMovePossible(chessboard, moveB4_C4)).not.toBeTruthy();
    }

    @Test('In a red square, a Pawn cannot leap other pieces, when moving horizontally')
    testCannotLeapHorizontally(): void {
        const moveB4_D4 : Move  = move (position.B4,position.A4); 
        putPiece(chessboard, position.C4, pieces.whitePawn);
        Expect(isMovePossible(chessboard, moveB4_D4)).not.toBeTruthy();
    }

    @Test('In a red square, a Pawn cannot leap other pieces, when moving vertically')
    testCannotLeapvertically(): void {
        const moveB4_B6: Move  = move (position.B4,position.B6); 
        putPiece(chessboard, position.B5, pieces.whitePawn);
        Expect(isMovePossible(chessboard, moveB4_B6)).not.toBeTruthy();
    }
}




