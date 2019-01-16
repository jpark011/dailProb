class Game {
    constructor( row, col ) {
        this.row = row;
        this.col = col;
        this.board = [];
        for ( let i = 0; i < row; i++ ) {
            let tmpRow = [];
            for ( let j = 0; j < col; j++ ) {
                tmpRow[j] = true; 
            }
            this.board[i] = tmpRow;
        }
    }

    tick() {
        for ( let i = 0; i < this.row; i++ ) {
            for ( let j = 0; j < this.col; j++ ) {
                let numLiving = countLiving( i, j );
                if ( this.board[i][j] && ( 2 <= numLiving && numLiving <= 3 )
                    || (!this.board[i][j] && numLiving === 3 ) ) {
                    this.board[i][j] = true;
                } else {
                    this.board[i][j] = false;
                }
            }
        }
    }

    countLiving( row, col ) {
        let living = 0;
        for ( let i = -1; i <= 1; i++ ) {
            for ( let j = -1; j <= 1; j++ ) {
                if ( i === 0 && j === 0 ) continue; 
                if ( outOfBound(row + i, col + j) ) continue;
                living++;
            }
        }
        return living;
    }

    outOfBound( i, j ) {
        return i < 0 || this.row <= i || j < 0 || this.col < j;
    }
};
