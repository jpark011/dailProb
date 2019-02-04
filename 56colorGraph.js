// Given an undirected graph represented as an adjacency matrix and an integer k, write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.

const RED = 2;
const BLUE = 3;

function colorGraph( graph, k ) {
    const numNodes = graph.length;
    const nodeColors = [];
    nodeColors.push(RED);
    const toVisit = [];
    toVisit.push(0);

    while ( 0 < toVisit.length ) {
        let node = toVisit.pop();
        for ( let i = 0; i < numNodes; i++ ) {
            // neighbor
            if ( graph[node][i] === nodeColors[node] ) {
                return false;
            } else if ( graph[node][i] === 1 ) {
                nodeColors[i] = ( nodeColors[node] === RED )? BLUE : RED;
                toVisit.push(i); 
            }
        }
    }
    return true;
}