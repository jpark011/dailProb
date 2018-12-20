const BIG_DATA = [];
const MEM_SIZE = 10;
const NUM_PARTITIONS = Math.round(BIG_DATA.length / MEM_SIZE );

function randUniform() {
    const partitions = [];
    
    for ( let i = 0; i < NUM_PARTITIONS; i++ ) {
        partitions.push( BIG_DATA[  i * MEM_SIZE + Math.floor( Math.random() * MEM_SIZE ) ] );
    }

    return partitions[ Math.floor( Math.random() * partitions.length ) ];
}
