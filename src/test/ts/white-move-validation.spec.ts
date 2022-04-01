import { Expect, Test, Setup } from 'alsatian';
import * as pieces from '../../main/ts/piece';
import { Chessboard, createEmptyChessboard, putPiece } from '../../main/ts/chessboard';
import * as position from '../../main/ts/position';
import * as move from './predefined-movements';
import { isMovePossible } from '../../main/ts/movements';

let chessboard: Chessboard;
export class TestBlackPawnMovesInWhiteSquares {
    @Setup
    beforeEach(): void {
        // For all test squares, prepare an empty board and add a single black pawn in A7
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.A7, pieces.blackPawn);

        // Ensure it is black's turn
        chessboard.isWhiteMove = false;
    }

    @Test('In white squares, Pawns can move forward')
    testBlackPawnCanMoveForward(): void {
        Expect(isMovePossible(chessboard, move.A7_A6)).toBeTruthy();
    }

    @Test('In white squares, Pawns cannot move backward')
    testBlackPawnCannotMoveBackward(): void {
        Expect(isMovePossible(chessboard, move.A7_A8)).not.toBeTruthy();
    }

    @Test('When in the initial position, paws can move 2 squares forward')
    testBlackPawnInitialMove(): void {
        Expect(isMovePossible(chessboard, move.A7_A5)).toBeTruthy();
    }

    @Test('When in the initial position, pawns cannot move 3 squares forward')
    testBlackPawnCannotMoveThreeSquares(): void {
        Expect(isMovePossible(chessboard, move.A7_A4)).not.toBeTruthy();
    }

    @Test('When in face of another piece, pawns cannot move forward')
    testBlackPawnCannotMoveForwardToFullSquare(): void {
        putPiece(chessboard, position.A6, pieces.whitePawn);
        Expect(isMovePossible(chessboard, move.A7_A6)).not.toBeTruthy();
    }

    @Test('In white squares, Pawns cannot capture an empty square ')
    testBlackPawnCannotCaptureEmptySquare(): void {
        Expect(isMovePossible(chessboard, move.A7_B6)).not.toBeTruthy();
    }

    @Test('In white squares, Pawns cannot capture pieces of the same color')
    testBlackPawnCannotCaptureSameColor(): void {
        putPiece(chessboard, position.B6, pieces.blackKing);
        Expect(isMovePossible(chessboard, move.A7_B6)).not.toBeTruthy();
    }

    @Test('In white squares, Pawns can capture pieces of a different color')
    testBlackPawnCanCaptureDifferentColorPieces(): void {
        putPiece(chessboard, position.B6, pieces.whitePawn);
        Expect(isMovePossible(chessboard, move.A7_B6)).toBeTruthy();
    }
}

export class TestWhitePawnMovesInWhiteSquares {
    @Setup
    beforeEach(): void {
        // For all test squares, prepare an empty board and add a single white pawn in A2
        chessboard = createEmptyChessboard();
        putPiece(chessboard, position.A2, pieces.whitePawn);
    }

    @Test('In white squares, Pawns can move forward')
    testWhitePawnCanMoveForward(): void {
        Expect(isMovePossible(chessboard, move.A2_A3)).toBeTruthy;
    }

    @Test('In white squares, Pawns cannot move backward')
    testWhitePawnCannotMoveBackward(): void {
        Expect(isMovePossible(chessboard, move.A2_A1)).not.toBeTruthy;
    }

    @Test('When in the initial position, paws can move 2 squares forward')
    testWhitePawnInitialMove(): void {
        Expect(isMovePossible(chessboard, move.A2_A4)).toBeTruthy;
    }

    @Test('When in the initial position, pawns cannot move 3 squares forward')
    testWhitePawnCannotMoveThreeSquares(): void {
        Expect(isMovePossible(chessboard, move.A2_A5)).not.toBeTruthy;
    }

    @Test('When in face of another piece, pawns cannot move forward')
    testWhitePawnCannotMoveForwardToFullSquare(): void {
        putPiece(chessboard, position.A3, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A2_A3)).not.toBeTruthy;
    }

    @Test('In white squares, Pawns cannot capture an empty square ')
    testWhitePawnCannotCaptureEmptySquare(): void {
        Expect(isMovePossible(chessboard, move.A2_B3)).not.toBeTruthy;
    }

    @Test('In white squares, Pawns cannot capture pieces of the same color')
    testWhitePawnCannotCaptureSameColor(): void {
        putPiece(chessboard, position.B3, pieces.whitePawn);
        Expect(isMovePossible(chessboard, move.A2_B3)).not.toBeTruthy;
    }

    @Test('In white squares, Pawns can capture pieces of a different color')
    testWhitePawnCanCaptureDifferentColorPieces(): void {
        putPiece(chessboard, position.B3, pieces.blackPawn);
        Expect(isMovePossible(chessboard, move.A2_B3)).toBeTruthy;
    }
}
