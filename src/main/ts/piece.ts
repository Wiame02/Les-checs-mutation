/**
 * NE PAS MODIFIER CE FICHIER
 */

export interface Piece {
    symbol: string;
    isWhite: boolean;
    name: string;
}

export const whitePawn: Piece = { symbol: '♙', name: 'White Pawn', isWhite: true };
export const whiteKing: Piece = { symbol: '♔', name: 'White King', isWhite: true };
export const whiteQueen: Piece = { symbol: '♕', name: 'White Queen', isWhite: true };
export const whiteRook: Piece = { symbol: '♖', name: 'White Rook', isWhite: true };
export const whiteKnight: Piece = { symbol: '♘', name: 'White Knight', isWhite: true };
export const whiteBishop: Piece = { symbol: '♗', name: 'White Bishop', isWhite: true };

export const blackPawn: Piece = { symbol: '♟', name: 'Black Pawn', isWhite: false };
export const blackKing: Piece = { symbol: '♚', name: 'Black King', isWhite: false };
export const blackQueen: Piece = { symbol: '♛', name: 'Black Queen', isWhite: false };
export const blackRook: Piece = { symbol: '♜', name: 'Black Rook', isWhite: false };
export const blackKnight: Piece = { symbol: '♞', name: 'Black Knight', isWhite: false };
export const blackBishop: Piece = { symbol: '♝', name: 'Black Bishop', isWhite: false };
