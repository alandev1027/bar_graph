export const TypeColors = {
  SERVICE: "#d4eeea",
  BASIC: "#d7ebff",
};

export const NodeMap = {
  node1: {
    label: "Contact Info",
    value: 100,
    type: "BASIC",
    adjList: ["node2"],
  },
  node2: {
    label: "NemID",
    value: 95,
    type: "SERVICE",
    adjList: ["node3", "nodeBranch2"],
  },
  node3: {
    label: "Personal Address",
    value: 95,
    type: "BASIC",
    adjList: [],
  },
  nodeBranch2: {
    label: "Branch 2",
    value: 55,
    type: "BASIC",
    adjList: ["nodeBranch3", "nodeBranch4"],
  },
  nodeBranch3: {
    label: "Branch 3",
    value: 25,
    type: "BASIC",
    adjList: [],
  },
  nodeBranch4: {
    label: "Branch 4",
    value: 20,
    type: "BASIC",
    adjList: ["nodeBranch5"],
  },
  nodeBranch5: {
    label: "Branch 5",
    value: 10,
    type: "BASIC",
    adjList: ["nodeBranch6"],
  },
  nodeBranch6: {
    label: "Branch 6",
    value: 5,
    type: "BASIC",
    adjList: [],
  },
};
