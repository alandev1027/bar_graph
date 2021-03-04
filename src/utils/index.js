export const getNodeLists = (nodeMap) => {
  const nodekeys = Object.keys(nodeMap);

  if (!nodekeys.length) return [];

  let nodeLists = [[nodekeys[0]]];
  let isLoop = true;
  while (isLoop) {
    let newList = [];
    nodeLists.forEach((nodeList) => {
      const lastNode = nodeList[nodeList.length - 1];
      if (nodeMap[lastNode].adjList.length) {
        nodeMap[lastNode].adjList.forEach((node) =>
          newList.push([...nodeList, node])
        );
      } else {
        newList.push(nodeList);
      }
    });
    nodeLists = newList;
    const filterList = nodeLists.filter(
      (nodeList) => nodeMap[nodeList[nodeList.length - 1]].adjList.length
    );
    isLoop = filterList.length;
  }
  return nodeLists;
};
