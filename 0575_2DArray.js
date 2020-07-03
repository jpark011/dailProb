class Array2D {
    arr = [];
    row = -1;
    col = -1;

    constructor(arr) {
        this.arr.push(...arr);
        this.row = 0;
        this.col = 0;
    }

    has_next() {
        return !!(this.arr[this.row] && this.arr[this.row][this.col]);
    }

    next() {
        if (this.has_next()) {
            const ret = this.arr[this.row][this.col];

            this.col++;
            if (!this.has_next()) {
                this.row++;
                this.col = 0;
            }

            return ret;
        } else {
            throw Error('No more element!');
        }
    }
}

matrix = new Array2D([[1, 2, 3], [4, 5]]);
console.log(matrix.has_next());
console.log(matrix.next());
console.log(matrix.next());
console.log(matrix.next());
console.log(matrix.next());
console.log(matrix.next());
console.log(matrix.has_next());
console.log(matrix.next());
console.log({matrix});