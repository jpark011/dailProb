function squareSort(arr) {
    let ret = [];
    arr.filter((ele) => ele < 0)
        .forEach((ele) => {
            ret.push(ele * ele);
        });
    arr.filter((ele) => 0 <= ele)
        .reverse()
        .forEach(() => {
            ret.push(ele * ele);
        });
    return ret.reverse();
}