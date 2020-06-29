function printHanoiTower(n, source, spare, target) {
    if (n == 0) {
        return;
    }

    if (n == 1) {
        console.log(`Move ${source} to ${target}`);
        return;
    }
    printHanoiTower(n - 1, source, target, spare);
    console.log(`Move ${source} to ${target}`);
    printHanoiTower(n - 1, spare, source, target);
}

printHanoiTower(3, 1, 2, 3);