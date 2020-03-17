const readNodesFromFile = require('./fileUtils');
const fileName = process.argv[2];

const createBinaryTree = nodesFromFileList => {
  const binaryTree = {};
  nodesFromFileList.forEach(node => {
    const { nodeNumber, parentNodeNumber, childType, data } = node;

    binaryTree[node.nodeNumber] = {
      nodeNumber,
      data,
      leftChild: null,
      rightChild: null
    };

    parentNodeNumber !== 0 ? childType === 's' ? binaryTree[parentNodeNumber][leftChild] = 

  });
};

const main = async () => {
  const nodesFromFileList = await readNodesFromFile(fileName);
  console.log(nodesFromFileList);
};

main();
