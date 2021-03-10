export const getNodeLists = (nodeMap) => {
  let nodekeys = Object.keys(nodeMap);

  if (!nodekeys.length) return [];

  let nodeLists = [[nodekeys[0]]];
  while (nodekeys.length) {
    let newList = [];
    let nextNodeKey;
    for (let index = 0; index < nodeLists.length; index++) {
      let nodeList = nodeLists[index];
      nextNodeKey = nodeList[nodeList.length - 1];
      if (nodeMap[nextNodeKey].adjList.length) {
        nodeMap[nextNodeKey].adjList.forEach((node) =>
          newList.push([...nodeList, node])
        );
      } else {
        newList.push(nodeList);
      }
      if (nodekeys.includes(nextNodeKey))
        nodekeys.splice(nodekeys.indexOf(nextNodeKey), 1);
    }

    nodeLists = newList;
  }
  return nodeLists;
};
