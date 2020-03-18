const readNodesFromFile = require("./fileUtils");
const fileName = process.argv[2];

const createNode = (data, leftChild, rightChild) => ({
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

    if (parentNodeNumber === "0") {
      binaryTree.root = nodeNumber;
    } else {
      if (childType === "s") {
        if (!parentNode) {
          parentNode = createNode(data, nodeNumber, null);
        } else {
          parentNode.leftChild = nodeNumber;
        }
      } else if (childType === "d") {
        if (!parentNode) {
          parentNode = createNode(data, null, nodeNumber);
        } else {
          parentNode.rightChild = nodeNumber;
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
