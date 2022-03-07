/**
 * NE PAS MODIFIER CE FICHIER
 */
import * as pieces from './piece';
import { Piece } from './piece';
import { Move } from './movements';
import { Position } from './position';

export function isEmpty(chessboard: Chessboard, position: Position): boolean {
    const square: Square = squareAtPosition(chessboard, position);
    return square.isEmpty;
}

export function emptyfile(chessboard: Chessboard, move: Move): boolean {
    let start: number;
    let end: number;
    const file: number = move.from.file;

    if (file !== move.to.file) {
        //should not happen
        return false;
    }

    if (move.from.rank > move.to.rank) {
        start = move.to.rank;
        end = move.from.rank;
    } else {
        end = move.to.rank;
        start = move.from.rank;
    }

    let i: number = start;
    while (i <= end && chessboard.board[file][i].isEmpty) {
        i++;
    }

    return i === end;
}

export type Square = {
    position: Position;
    isEmpty: boolean;
    piece: Piece;
};

export type Chessboard = {
    board: Array<Array<Square>>;
    nbCoups: number; //nombre de coups joués
    historique: Array<Move>; //historique des coups (optionnel)
};

export function squareAtPosition(chessboard: Chessboard, position: Position): Square {
    const square: Square = chessboard.board[position.file][position.rank];

    return square;
}

export function pieceAtPosition(chessboard: Chessboard, position: Position): Piece {
    const square: Square = squareAtPosition(chessboard, position);
    return square.piece;
}

/** Retourne un échiquier initialisé en début de partie **/
export function createInitialChessboard(): Chessboard {
    const chessboard: Chessboard = createChessboard();

    // ranks 2 - 6 are empty
    for (let rank = 2; rank < 6; rank++) {
        for (let col = 0; col < 8; col++) {
            const position: Position = { rank: rank, file: col };
            const square: Square = { position: position, isEmpty: true, piece: pieces.NULL_PIECE };
            chessboard.board[col][rank] = square;
        }
    }

    // Pawns
    for (let col = 0; col < 8; col++) {
        putPieceAtCoordinate(chessboard, col, 1, pieces.whitePawn);
        putPieceAtCoordinate(chessboard, col, 0, pieces.whitePawn);
        putPieceAtCoordinate(chessboard, col, 6, pieces.blackPawn);
        putPieceAtCoordinate(chessboard, col, 7, pieces.blackPawn);
    }

    // Kings
    putPieceAtCoordinate(chessboard, 4, 0, pieces.whiteKing);
    putPieceAtCoordinate(chessboard, 4, 7, pieces.blackKing);

    return chessboard;
}

export function createEmptyChessboard(): Chessboard {
    const newChessboard: Chessboard = createChessboard();

    for (let rank = 0; rank < 8; rank++) {
        for (let col = 0; col < 8; col++) {
            const position: Position = { rank: rank, file: col };
            const square: Square = { position: position, isEmpty: true, piece: pieces.NULL_PIECE };
            newChessboard.board[col][rank] = square;
        }
    }

    return newChessboard;
}

function createChessboard(): Chessboard {
    const board: Square[][] = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
    }

    const newChessboard: Chessboard = {
        nbCoups: 0,
        board: board,
        historique: [],
    };
    return newChessboard;
}

function putPieceAtCoordinate(chessboard: Chessboard, file: number, rank: number, piece: Piece) {
    const position: Position = { rank: rank, file: file };
    return putPiece(chessboard, position, piece);
}

export function putPiece(chessboard: Chessboard, position: Position, piece: Piece): void {
    const board: Array<Array<Square>> = chessboard.board;
    const square: Square = { position: position, isEmpty: false, piece: piece };
    board[position.file][position.rank] = square;
}
