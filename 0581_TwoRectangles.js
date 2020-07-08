function areaTwoRectangles(rect1, rect2) {
    const topRect = (rect1.top_left[0] < rect2.top_left[0])? rect1 : rect2;
    const bottomRect = (rect1.top_left[0] < rect2.top_left[0])? rect2 : rect1;
    const leftRect = (rect1.top_left[1] < rect2.top_left[1])? rect1 : rect2;
    const rightRect = (rect1.top_left[1] < rect2.top_left[1])? rect2 : rect1;

    if (bottomRect.top_left[0] < topRect.top_left[0] + topRect.dimensions[0]
        && rightRect.top_left[1] < leftRect.top_left[1] + leftRect.dimensions[1]) {
        const h = topRect.top_left[0] + topRect.dimensions[0] - bottomRect.top_left[0];
        const w = leftRect.top_left[1] + leftRect.dimensions[1] - rightRect.top_left[1];
        return w * h;
    } else {
        return 0;
    }
}

console.log(
    areaTwoRectangles(
        {
            top_left: [1, 4],
            dimensions: [3, 3]
        }, 
        {
            top_left: [0, 5],
            dimensions: [4, 3]
        }
    )
);