export const WHITE = 'piece_white';
export const BLACK = 'piece_black';
export const NO_PIECE_ID = '_';

export const ROUTE_PIECE = 'chess/piece/route';
export const MOVE_PIECE = 'chess/piece/move';

export const routePiece = (squareId, pieceId) => ({
	type: ROUTE_PIECE,
	squareId,
	pieceId
});

export const movePiece = (toSquareId) => ({
	type: MOVE_PIECE,
	toSquareId
});
