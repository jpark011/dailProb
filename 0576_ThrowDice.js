function throwDice(n, face, total) {
    // let count = 0;
    // // const halfFace = Math.ceil(face / 2);

    // if (total === 0) {
    //     count = 1;
    // } else if (n === 0) {
    //     count = 0;
    // } else {
    //     for (let i = 1; i <= face; i++) {
    //         for (let j = i; j <= face; j++) {
    //             const sum = i + j;
    //             if (sum <= total) {
    //                 count += throwDice(n - 1, face, total - sum);
    //             }
    //         }
    //     }
    // }

    const M = new Array(n + 1).fill(new Array(total + 1).fill(0));

    for (let i = 1; i <= face; i++) {
        M[n][i] = 1;
    }

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= total; col++) {
            for (let i = 1; i <= face; i++) {
                for (let j = i; j <= face; j++) {
                    const sum = i + j;
                    if (sum <= col) {
                        M[row][col] += M[row - 1][col - sum];
                    }
                }
            }
        }
    }

    return M[n][total];
}

console.log(throwDice(3, 6, 7));