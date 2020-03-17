const readNodesFromFile = require('./fileUtils');
const fileName = process.argv[2];

const createNode = (nodeNumber, data, leftChild, rightChild) => ({
  data,
  leftChild,
  rightChild
});

const createBinaryTree = nodesFromFileList => {
  const binaryTree = {
    root: null,
    nodes: {}
  };

  nodesFromFileList.forEach(node => {
    const { nodeNumber, parentNodeNumber, childType, data } = node;

    // create new node in tree
    binaryTree.nodes[node.nodeNumber] = createNode(data, null, null);

    // take reference of the parent of the actual node
    let parentNode = binaryTree.nodes[parentNodeNumber];

    parentNodeNumber !== '0'
      ? childType === 's'
        ? parentNode
          ? (parentNode[leftChild] = nodeNumber)
          : (parentNode = createNode(data, nodeNumber, null))
        : parentNode
        ? (parentNode[rightChild] = nodeNumber)
        : (parentNode = createNode(data, null, nodeNumber))
      : (binaryTree.root = nodeNumber);

    if (parentNode === '0') {
      binaryTree.root = nodeNumber;
    } else {
      if (childType === 's') {
        if (!parentNode) {
          parentNode = createNode(data, nodeNumber, null);
        } else {
          parentNode[leftChild] = nodeNumber;
        }
      }
    }
  });

  return binaryTree;
};

const main = async () => {
  const nodesFromFileList = await readNodesFromFile(fileName);
  console.log(createBinaryTree(nodesFromFileList));
};

main();
