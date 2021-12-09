// Edge list
const edgeGraph = [[0,2], [2,3],[2,1], [1,3]] 
// this is the graph form of a vertex 0 that is connected to a vertex 2, same vertex 2 that is connected to vertex 3, vertex 2 that is connected to vertex 1, and vertex 1 and vertex 3 are connected. 

//Adjacent List
// index of this array is the node value. The numbers in brackets are what it's connected with
const adjGraph = [[2], [2,3], [0,1,3], [1,2]]

//Adjacent Matrix
// 0 is no connection, 1 is connected
const matrixGraph = [
 [0,0,1,0],
 [0,0,1,1],
 [1,1,0,1],
 [0,1,1,0]
]

// matrixGraph[0] is connected to 2, represented by the 1.
// matrixGraph[1] is connected to both 2 and 3
// matrixGraph[2] is connected to 0,1, and 3
// matrixGraph[3] is connected to 1 & 2

class Graph {
 constructor() {
  this.numberOfNodes = 0;
  this.adjacentList = {}
 }

 addVertex(node) {
   if (this.adjacentList[node]) {
    return
   } else {
     this.adjacentList[node] = []
     this.numberOfNodes++
   }
 }

 addEdge(node1, node2) {
   if (this.adjacentList[node1].includes(node2) && this.adjacentList[node2].includes(node1)) {
    return
   } else {
    if (this.adjacentList[node1].includes(node2)) {
     this.adjacentList[node2].push(node1)
    } else if (this.adjacentList[node2].includes(node1)) {
     this.adjacentList[node1].push(node2)
    } else {
     this.adjacentList[node2].push(node1)
     this.adjacentList[node1].push(node2)
    }
   }
 }
 showConnections() {
  const allNodes = Object.keys(this.adjacentList);
  for (let node of allNodes) {
   let nodeConnections = this.adjacentList[node]
   let connections = ''
   let vertex;
   for (vertex of nodeConnections) {
    connections += vertex + ' '
   }
   console.log(node + ' --> ' + connections)
  }
 }
}

const graphExample = new Graph
graphExample.addVertex('0')
graphExample.addVertex('1')
graphExample.addVertex('2')
graphExample.addVertex('3')
graphExample.addVertex('4')
graphExample.addVertex('5')
graphExample.addVertex('6')
graphExample.addVertex('5')

graphExample.addEdge('6','5')
graphExample.addEdge('5','4')
graphExample.addEdge('4','2')
graphExample.addEdge('3','4')
graphExample.addEdge('3','1')
graphExample.addEdge('1','2')
graphExample.addEdge('1','0')
graphExample.addEdge('2','0')

graphExample.showConnections()
console.log(graphExample.numberOfNodes)