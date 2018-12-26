function minRooms( schedules ) {
    let numRooms = 0;
    let scheduleStack = [];

    sortSchedules( schedules );

    for ( let schedule in schedules ) {
        let stackSize = scheduleStack.length;
        if ( stackSize === 0 || schedule[0] < scheduleStack[stackSize - 1] ) {
            numRooms++;
        }
        scheduleStack.push( schedule[0] );
        scheduleStack.push( schedule[1] );
    }
    return numRooms;
}

function sortSchedules( schedules ) {
    schedules.sort( ( s1, s2 ) => {
        if ( s1[0] < s2[0] ) 
            return -1;
        else if ( s2[0] < s1[0] )
            return 1;
        else
            return 0;
    } );
}
