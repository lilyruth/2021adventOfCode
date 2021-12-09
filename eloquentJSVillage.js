let exampleInput = 
`2199943210
3987894921
9856789892
8767896789
9899965678`

function buildGraph(edges) {
 let graph = Object.create(null)

 function addEdge(from, to) {
  if (graph[from] == null) {
   graph[from] = [to]
  } else {
   graph[from].push(to)
  }
 }

 for (let [from, to] of edges.map(road => road.split("-"))) {
  addEdge(from, to)
  addEdge(to, from)
 }
 return graph
}

const roads = [
 "Alice's home-Bob's home",
 "Alice's home-PO",
 "Daria's home-Ernie's home",
 "Ernie's home-Grete's home",
 "Grete's home-Shop",
 "Marketplace-PO",
 "Alice's home-Cabin",
 "Bob's home-Town Hall",
 "Daria's home-Town Hall", 
 "Grete's home-Farm",
 "Marketplace-Farm",
 "Marketplace-Shop",
 "Marketplace-Town Hall",
 "Shop-Town Hall"
]
const roadGraph = buildGraph(roads)

// build a state for parcel delivery

class VillageState {
 constructor(place, parcels) {
  this.place = place,
  this.parcels = parcels;
 }

 move(destination) {
  if (!roadGraph[this.place].includes(destination)) {
   return this;
  } else {
   let parcels = this.parcels.map(p => {
    if (p.place != this.place) return p;
    return {place: destination, address: p.address}
   })
   console.log('parsels in function',  parcels)
   parcels.filter(p => p.place != p.address)
   console.log('parcels in function after filter', parcels)
   return new VillageState(destination, parcels)
  }
 }
}

let first = new VillageState("PO", [{place: "PO", address: "Alice's home"}])
let next = first.move("Alice's home")

console.log('next.place', next.place)
console.log('next.parcels', next.parcels)
console.log('first.place', first.place)