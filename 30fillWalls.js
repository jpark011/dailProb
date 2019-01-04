function fillWalls( walls ) {
    let highest1 = Number.MIN_VALUE;
    let highest2 = Number.MIN_VALUE;
    let highest1_i = -1;
    let highest2_i = -1;
    let filled = 0;

    for ( let i = 0; i < walls.length; i++ ) {
        if ( highest2 < walls[i] ) {
            if ( highest1 < walls[i] ) {
                highest2 = highest1;
                highest2_i = highest1_i;
                highest1 = walls[i];
                highest1_i = i;
            } else {
                highest2 = walls[i];
                highest2_i = i;
            }
        }
    }

    let frontWall = ( highest1_i < highest2_i )? highest1 : highest2;
    let backWall = ( highest1_i < highest2_i )? highest2 : highest1;
    let frontWall_i = ( highest1_i < highest2_i )? highest1_i : highest2_i;
    let backWall_i = ( highest1_i < highest2_i )? highest2_i : highest1_i;

    for ( let i = 0; i < walls.length; i++ ) {
        if ( i < frontWall_i ) {
            filled +=  frontWall - walls[i];
        } else if ( frontWall_i < i && i < backWall_i ) {
            filled +=  (frontWall < backWall)? frontWall : backWall;
            filled -= walls[i];
        } else if ( backWall_i < i ) {
            filled +=  backWall - walls[i];
        }
    }

    return filled;
} 
