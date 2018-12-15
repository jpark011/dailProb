class SlowScheduler {
    constructor() {
        this.queue = [];

        setInterval( () => {
            if ( this.queue.length ) {
                let task = this.queue.shift();
                task.f(i);
                console.log(`Ran ${task}`);
            }
        }, 10 );
    }

    schedule( f, i ) {
        this.queue.push( { f: f, i: i } );
    }
}