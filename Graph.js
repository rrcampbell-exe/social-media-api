const { User } = require("./models");
const mongoose = require('mongoose');

// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor() {
    this.AdjList = new Map();
    this.userArray = [];
  }

  // functions to be implemented

  // addVertex(userId)
  addVertex(userId) {
    this.AdjList.set(userId, []);
  }
  // addEdge(sourceId, targetId)
  addEdge(sourceId, targetId) {
    this.AdjList.get(sourceId).push(targetId);
    // this.AdjList.get(targetId).push(sourceId);
  }
  // printGraph()
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
  // needed: data strcuture, place to start, place to end, function to test if got to right place, frontier (places we *could* search)
  // bfs(v) breadth-first
  search(start, end) {

  }

  // dfs(v) depth-first
  
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mySocialNetwork = new Graph()

User.find().then(x => {
  x.forEach (user => {
    mySocialNetwork.addVertex(user._id)
  })
  x.forEach (user => {
    console.log(user)
    user.friends.forEach (friend => {
      console.log(`friend:`, friend)
      mySocialNetwork.addEdge(user._id, friend)
    })
  })
  mySocialNetwork.printGraph()
})
