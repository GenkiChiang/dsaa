import { Dictionary } from "../map";

export class Graph<V = any> {
  vertexes: V[] = [];
  edges: Dictionary = new Dictionary();
  constructor() {}

  // vertexes vertex[] 顶点集合
  // adjList adjoin[] 邻接表

  addVertex(vertex: V) {
    this.vertexes.push(vertex);
    this.edges.set(vertex, []);
  }
  addEdge(vertexA: V, vertexB: V) {
    this.edges.get(vertexA).push(vertexB);
    this.edges.get(vertexB).push(vertexA);
  }
  toString() {
    let str = "";
    let key = 0;
    this.vertexes.forEach((vertex) => {
      const edge = this.edges.get(vertex);
      str += `${vertex} -> ${edge} \n`;
    });

    return str;
  }
}
