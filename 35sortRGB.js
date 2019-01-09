const rgbMap = {
    'R': 0,
    'G': 1,
    'B': 2,
};

function sortRGB( list ) {
    for ( let i = 0; i < list.length; i++ ) {
        if ( list[i] !== 'R' ) {
            let toSwap = i;
            for ( let j = i + 1; j < list.length; j++ ) {
                if ( rgbMap[list[j]] < rgbMap[list[i]]  ) {
                    toSwap = j;
                }
            }
            toSwap = list[j];
            list[j] = list[i];
            list[i] = toSwap;
        }
    }
}