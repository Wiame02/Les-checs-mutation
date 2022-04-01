import { Chessboard, isEmpty, Square, squareAtPosition } from './chessboard';
import { Move } from './movements';
import { position, equals, left, right, top, bottom } from './position';

/**
 * Checks whether a Black Pawn in a white square can perform a given move.
 * Inside a white square, the black pawn moves like a pawn in classic chess.
 * That is, it can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied (black dots in the
 * diagram); or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square (black "x"s).
 *
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function blackPawnInWhiteSquareMove(board: Chessboard, move: Move): boolean {
    // Single forward
    if (equals(move.to, bottom(move.from))) {
        return isEmpty(board, move.to);
    }

    // Double forward
    if (move.from.rank === 6 && equals(move.to, bottom(bottom(move.from)))) {
        return isEmpty(board, bottom(move.from)) && isEmpty(board, move.to);
    }

    // Capture
    if (equals(move.to, left(bottom(move.from))) || equals(move.to, right(bottom(move.from)))) {
        const destination: Square = squareAtPosition(board, move.to);
        return !destination.isEmpty && destination.piece.isWhite;
    }

    return false;
}

/**
 * Checks whether a White Pawn in a white square can perform a given move.
 * Inside a white square, the black pawn moves like a pawn in classic chess.
 * That is, it can move forward to the unoccupied square immediately in front of
 * it on the same file, or on its first move it can advance two squares along
 * the same file, provided both squares are unoccupied (black dots in
 * the diagram); or the pawn can capture an opponent's piece on a square diagonally
 * in front of it on an adjacent file, by moving to that square (black "x"s).
 *
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function whitePawnInWhiteSquareMove(board: Chessboard, move: Move): boolean {
    // Single forward
    if (equals(move.to, top(move.from))) {
        return isEmpty(board, move.to);
    }

    // Double forward
    if (move.from.rank === 1 && equals(move.to, top(top(move.from)))) {
        return isEmpty(board, top(move.from)) && isEmpty(board, move.to);
    }

    // Capture
    if (equals(move.to, left(top(move.from))) || equals(move.to, right(top(move.from)))) {
        const destination: Square = squareAtPosition(board, move.to);
        return !destination.isEmpty && !destination.piece.isWhite;
    }

    return false;
}

/**
 * Checks whether a King can perform a given move.
 * The king moves one square in any direction, independently from its position.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function kingMove(board: Chessboard, move: Move): boolean {
    let gapFilePos : number = Math.abs(move.to.file - move.from.file);
    let gapRankPos : number = Math.abs(move.to.rank - move.from.rank);
    const current : Square = squareAtPosition(board, move.from)
    const destination : Square = squareAtPosition(board, move.to);

    return ((gapFilePos==1 || gapRankPos==1) && (destination.isEmpty || (destination.piece.isWhite!==current.piece.isWhite)));
}

/**
 * Checks whether a Pawn in a grey square can perform a given move.
 * In a grey square, the Pawn moves like a Queen in classic chess.
 * That is, it combines the power of a rook and bishop and can move any
 * number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function pawnInGreySquareMove(board: Chessboard, move: Move): boolean {
    return (pawnInBlueSquareMove(board, move) || pawnInRedSquareMove(board, move));
}

/**
 * Checks whether a Pawn in a red square can perform a given move.
 * In a red square, the Pawn moves like a Rook in classic chess.
 * That is, it can move any number of squares along a rank or file,
 * but cannot leap over other pieces.
 * 
 * @param board The chessboard of the current game
 * @param move
 */
export function pawnInRedSquareMove(board: Chessboard, move: Move): boolean {
   if (( move.from.file != move.to.file && move.from.rank  == move.to.rank ) ||
   ( move.from.file == move.to.file && move.from.rank  != move.to.rank) )  {


   }
    
    

    return true 

/**
 * Checks whether a Pawn in a blue square can perform a given move.
 * In a blue square, the Pawn moves like a Bishop in classic chess.
 * That is, it can move any number of squares diagonally,
 * but cannot leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function pawnInBlueSquareMove(board: Chessboard, move: Move): boolean {
    let gapFilePos : number = move.to.file - move.from.file;
    let gapRankPos : number = move.to.rank - move.from.rank ;
    let isMoveValid : boolean = true;
    let isEmptySquare : boolean;
    let isDestination : boolean;
    let isNotSameColor : boolean;

    if(Math.abs(gapFilePos)==Math.abs(gapRankPos) && gapFilePos!=0){ //The movement is a diagonal and not null
        let file : number = move.from.file;
        let rank : number = move.from.rank;
        const current : Square = squareAtPosition(board, move.from)
        const destination : Square = squareAtPosition(board, move.to);
        while(file!=move.to.file && rank!=move.to.rank && isMoveValid){
            if(gapFilePos>0){file++;}else{file--;}
            if(gapRankPos>0){rank++;}else{rank--;}

            isEmptySquare = isEmpty(board,position(file,rank));
            isDestination = file==move.to.file && rank==move.to.rank;
            isNotSameColor = destination.piece.isWhite!=current.piece.isWhite;

            isMoveValid = (isEmptySquare || (isDestination && isNotSameColor));
        }
    }else{isMoveValid=false;}
    return isMoveValid;
}

/**
 * Checks whether a Pawn in a yellow square can perform a given move.
 * In a yellow square, the Pawn moves like a Knight in classic chess.
 * That is, its move forms an "L"-shape:
 * two squares vertically and one square horizontally, or two
 * squares horizontally and one square vertically.)
 *
 * In an yellow square, the Pawn can leap over other pieces.
 *
 * @param board The chessboard of the current game
 * @param move
 */
export function pawnInYellowSquareMove(board: Chessboard, move: Move): boolean {
    let gapFilePos : number = Math.abs(move.to.file - move.from.file);
    let gapRankPos : number = Math.abs(move.to.rank - move.from.rank);

    // Valid Movement
    if ((gapFilePos===1 && gapRankPos===2) || (gapFilePos===2 && gapRankPos===1)) {
        const current : Square = squareAtPosition(board, move.from)
        const destination : Square = squareAtPosition(board, move.to);

        // Empty square or piece from other player
        return (destination.isEmpty || (destination.piece.isWhite!==current.piece.isWhite));
    }
    return false;
}
