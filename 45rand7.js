// Using a function rand5() that returns an integer from 1 to 5(inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7(inclusive).
function rand5() {
    return Math.floor(Math.random() * 5 + 1);
}


function rand7() {
    let r = 0;
    for ( let i = 0; i < 7; i++ ) {
        r += rand5();
    }

    return r % 7;
}