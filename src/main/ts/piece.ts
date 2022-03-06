/**
 * NE PAS MODIFIER CE FICHIER
 */

export type Piece = {
    symbol: string;
    isWhite: boolean;
    name: string;
};

export const whitePawn: Piece = { symbol: '♙', name: 'White Pawn', isWhite: true };
export const whiteKing: Piece = { symbol: '♔', name: 'White King', isWhite: true };
export const blackPawn: Piece = { symbol: '♟', name: 'Black Pawn', isWhite: false };
export const blackKing: Piece = { symbol: '♚', name: 'Black King', isWhite: false };
