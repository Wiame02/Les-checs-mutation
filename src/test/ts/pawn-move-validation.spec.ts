import { Expect, Test, Setup } from 'alsatian';
import * as isPossible from '../../main/ts/move-validation';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import * as move from './predefined-movements';

let chessboard: Chessboard;
export class TestBlackPawnMoves {
    chessboard: Chessboard;
    @Setup
    beforeEach(): void {
        chessboard = createEmptyChessboard();
    }

    @Test('Pawns can move forward')
    testPawnCanMoveForward(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A6)).toBeTruthy();
    }

    @Test('Pawns cannot move backward')
    testPawnCannotMoveBackward(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A8)).not.toBeTruthy();
    }

    @Test('When in the initial position, paws can move 2 squares forward')
    testPawnInitialMove(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A5)).toBeTruthy();
    }

    @Test('When in the initial position, pawns cannot move 3 squares forward')
    testCannotMoveThreeSquares(): void {
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A4)).not.toBeTruthy();
    }

    @Test('When in face of another piece, pawns cannot move foreward')
    testPawnCannotMoveForwardToFullSquare(): void {
        putPiece(chessboard, position.A6, pieces.whitePawn);
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A6)).not.toBeTruthy();
    }

    @Test('Pawns cannot capture an empty square ')
    testPawnCannotCaptureEmptySquare(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        Expect(isPossible.blackPawnMove(chessboard, move.A7_A6)).not.toBeTruthy();
    }

    @Test('Pawns cannot capture pieces of the same color')
    testPawnCannotCaptureSameColor(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        putPiece(chessboard, position.B6, pieces.blackKing);

        Expect(isPossible.blackPawnMove(chessboard, move.A7_B6)).not.toBeTruthy();
    }

    @Test('Pawns can capture pieces of a different color')
    testPawnCanCaptureDifferentColorPieces(): void {
        putPiece(chessboard, position.A7, pieces.blackPawn);
        putPiece(chessboard, position.B6, pieces.whitePawn);

        Expect(isPossible.blackPawnMove(chessboard, move.A7_B6)).toBeTruthy();
    }
}
