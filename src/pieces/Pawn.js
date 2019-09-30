import Piece from './Piece';

class Pawn extends Piece {
    constructor(player) {
        super( player, (player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));

            this.initialPosition = {
                1: [48, 49, 50, 51, 52, 53, 54, 55],
                2: [8, 9, 10, 11, 12, 13, 14, 15]
            }
    }

    isMovePossible(src, dest, isDestEnemyOccupied) {
        if (this.player === 1) {
            if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPosition[1].indexOf(src) !== - 1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPosition[2].indexOf(src) !== -1)) {
                return true;
            } else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {
                return true;
            }
        }
        return false;
    }

    // Returns array of one if pawn moves two steps, else returns empty array
    getSrcToDestPath(src, dest) {
        if (dest === src - 16) {
            return [src - 8];
        } else if (dest === src + 16) {
            return [src + 8];
        }
        return [];
    }
}

export default Pawn;
