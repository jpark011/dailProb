// Implement a file syncing algorithm for two computers over a low - bandwidth network.What if we know the files in the two computers are mostly the same ?
class Log {
    constructor( operation, date = new Date()) {
        this.date = date;
        this.operation = operation;
    }
}

class SyncFile {
    constructor() {
        this.log = [];
    }

    edit(operation) {
        this.log.push( new Log(operation) );
    } 

    sync(otherFile) {
        // .. sync two stacks...
    }
}