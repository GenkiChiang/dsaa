import { Graph } from "../src/graph/Graph";
import { randomStringList } from "../src/utils";

it("test Graph", () => {
  const graph = new Graph();

  const vertexes = randomStringList(10, 2);
  vertexes.forEach((vertex) => {
    graph.addVertex(vertex);
  });

  graph.addEdge(vertexes[0], vertexes[1]);
  graph.addEdge(vertexes[1], vertexes[2]);
  graph.addEdge(vertexes[5], vertexes[6]);
  graph.addEdge(vertexes[8], vertexes[9]);
  // TODO: expect
});
