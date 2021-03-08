/**
 * NE PAS MODIFIER CE FICHIER
 */

import { Chessboard, squareAtPosition, Square } from './chessboard';
import { Position } from './position';
import * as pieces from './piece';
import { Piece } from './piece';
import * as isPossible from './move-validation';

const VALID_MOVE_STRING = new RegExp('([a-h]|[A-H])([1-8])-([A-H]|[a-h])([1-8])');

export interface Move {
    isValid: boolean;
    from?: Position;
    to?: Position;
}

/**
 * Creates a new Move from two Positions, representing
 * the Move's initial and final position.
 *
 * @param from The initial position
 * @param to The final position
 */
export function move(from: Position, to: Position): Move {
    const move: Move = { from: from, to: to, isValid: true };
    return move;
}

/**
 * Processes a move received from a client browser.
 * If the move is valid and possible, the move is performed and this function
 * returns true. Otherwise, it returns false
 *
 * @param chessboard The chessboard for the current game
 * @param moveString The string received from the client containing a move
 * @returns true, if the move is valid and possible
 */
export function processMove(chessboard: Chessboard, moveString: string): boolean {
    const move: Move = parseMoveString(moveString);

    if (move.isValid && isMovePossible(chessboard, move)) {
        performMove(chessboard, move);
    } else {
        console.log('Invalid movement !');
        return false;
    }
    return true;
}

/**
 * Parses a string in the format "A1-F8" and returns a Move.
 * If the format is not valid, returns a Move with isValid === false.
 *
 * @param movementString A 5 characters string containing a move
 */
export function parseMoveString(movementString: string): Move {
    let newMove: Move;
    if (movementString.length != 5 || !movementString.match(VALID_MOVE_STRING)) {
        const invalidMove: Move = { isValid: false };
        newMove = invalidMove;
    } else {
        const fromFile: number = movementString.charCodeAt(0);
        const fromRank: number = parseInt(movementString[1]);
        const toFile: number = movementString.charCodeAt(3);
        const toRank: number = parseInt(movementString[4]);

        // In Unicode, charCode('A') == 65, charCode('a') == 97
        // Remember that Arrays start from [0][0] == position 'A1'
        const from: Position = { rank: fromRank - 1, file: fromFile > 90 ? fromFile - 97 : fromFile - 65 };
        const to: Position = { rank: toRank - 1, file: toFile > 90 ? toFile - 97 : toFile - 65 };

        newMove = { isValid: true, from: from, to: to };
    }
    return newMove;
}

/**
 * Checks whether a move is possible in the given chessboard
 * @param chessboard
 * @param move
 */
function isMovePossible(chessboard: Chessboard, move: Move): boolean {
    const square: Square = squareAtPosition(chessboard, move.from!);
    if (square.isEmpty) {
        return false;
    }

    const piece: Piece = square.piece!;

    switch (piece) {
        case pieces.whitePawn:
            return isPossible.whitePawnMove(chessboard, move);
        case pieces.blackPawn:
            return isPossible.blackPawnMove(chessboard, move);
        case pieces.whiteKing:
            return isPossible.kingMove(chessboard, move);
        case pieces.whiteQueen:
            return isPossible.queenMove(chessboard, move);
        case pieces.whiteBishop:
            return isPossible.bishopMove(chessboard, move);
        case pieces.whiteKnight:
            return isPossible.knightMove(chessboard, move);
        case pieces.whiteRook:
            return isPossible.rookMove(chessboard, move);
        case pieces.blackKing:
            return isPossible.kingMove(chessboard, move);
        case pieces.blackQueen:
            return isPossible.queenMove(chessboard, move);
        case pieces.blackBishop:
            return isPossible.bishopMove(chessboard, move);
        case pieces.blackKnight:
            return isPossible.knightMove(chessboard, move);
        case pieces.blackRook:
            return isPossible.rookMove(chessboard, move);
    }

    return false;
}

function performMove(board: Chessboard, move: Move) {
    const source: Square = squareAtPosition(board, move.from!);
    const destination: Square = squareAtPosition(board, move.to!);

    destination.piece = source.piece;
    destination.isEmpty = false;
    source.isEmpty = true;
}
