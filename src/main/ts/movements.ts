import { Chessboard, squareAtPosition, Square } from './chessboard';
import { Position } from './position';
import * as position from './position';
import * as pieces from './piece';
import { Piece } from './piece';
import * as isPossible from './move-validation';

const VALID_MOVE_STRING = new RegExp('([a-h]|[A-H])([1-8])-([A-H]|[a-h])([1-8])');
let isWhiteMove = true;

export type Move = {
    isValid: boolean;
    from: Position;
    to: Position;
};

/**
 * Creates a new Move from two Positions, representing
 * the Move's initial and final position.
 *
 * @param from The initial position
 * @param to The final position
 */
export function move(from: Position, to: Position): Move {
    return { from: from, to: to, isValid: true };
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
    const movement: Move = parseMoveString(moveString);

    if (movement.isValid && isMovePossible(chessboard, movement)) {
        performMove(chessboard, movement);
        isWhiteMove = !isWhiteMove;
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
        const invalidMove: Move = { isValid: false, from: position.NULL_POSITION, to: position.NULL_POSITION };
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
 * @param movement
 */
export function isMovePossible(chessboard: Chessboard, movement: Move): boolean {
    const square: Square = squareAtPosition(chessboard, movement.from);
    if (square.isEmpty) {
        return false;
    }
    const piece: Piece = square.piece;
    const current: Position = movement.from;

    if ((isWhiteMove && !piece.isWhite) || (!isWhiteMove && piece.isWhite)) {
        return false;
    }

    if (piece === pieces.blackKing || piece === pieces.whiteKing) {
        return isPossible.kingMove(chessboard, movement);
    }

    if (position.isWhitePosition(current)) {
        if (piece.isWhite) {
            return isPossible.whitePawnInWhiteSquareMove(chessboard, movement);
        } else {
            return isPossible.blackPawnInWhiteSquareMove(chessboard, movement);
        }
    }
    // TODO: Red position
    // TODO: Yellow position
    // TODO: Blue position
    // TODO: Grey position
    return false;
}

function performMove(board: Chessboard, movement: Move) {
    const source: Square = squareAtPosition(board, movement.from);
    const destination: Square = squareAtPosition(board, movement.to);

    destination.piece = source.piece;
    destination.isEmpty = false;
    source.isEmpty = true;
}
