import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import * as move from './predefined-movements';
import { isMovePossible } from '../../main/ts/movements';

let chessboard: Chessboard;
export class TestBlackPawnMovesInWhiteCases {
    chessboard: Chessboard;
    @Setup
    beforeEach(): void {
        chessboard = createEmptyChessboard();
    }

    @Test('In white cases, Pawns can move forward')
    testPawnCanMoveForward(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A7_A6)).toBeTruthy();
    }

    @Test('In white cases, Pawns cannot move backward')
    testPawnCannotMoveBackward(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A7_A8)).not.toBeTruthy();
    }

    @Test('When in the initial position, paws can move 2 squares forward')
    testPawnInitialMove(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A7_A5)).toBeTruthy();
    }

    @Test('When in the initial position, pawns cannot move 3 squares forward')
    testCannotMoveThreeSquares(): void {
        Expect(isMovePossible(chessboard, move.A7_A4)).not.toBeTruthy();
    }

    @Test('When in face of another piece, pawns cannot move foreward')
    testPawnCannotMoveForwardToFullSquare(): void {
        putPiece(chessboard, position.A6, pieces.whitePawn);
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A7_A6)).not.toBeTruthy();
    }

    @Test('In white cases, Pawns cannot capture an empty square ')
    testPawnCannotCaptureEmptySquare(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A7_B6)).not.toBeTruthy();
    }

    @Test('In white cases, Pawns cannot capture pieces of the same color')
    testPawnCannotCaptureSameColor(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        putPiece(chessboard, position.B6, pieces.blackKing);

        Expect(isMovePossible(chessboard, move.A7_B6)).not.toBeTruthy();
    }

    @Test('In white cases, Pawns can capture pieces of a different color')
    testPawnCanCaptureDifferentColorPieces(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        putPiece(chessboard, position.B6, pieces.whitePawn);

        Expect(isMovePossible(chessboard, move.A7_B6)).toBeTruthy();
    }
}
