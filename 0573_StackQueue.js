function interleave(stack) {
    const queue = [...stack];
    const n = stack.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = queue.shift();
        queue.push(temp);
        temp = stack.pop();
        queue.push(temp);
    }

    if (n % 2 === 1) {
        queue.push(queue.shift());
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        queue.shift();
    }
    return queue;
}

console.log(interleave([1, 2, 3, 4, 5]));