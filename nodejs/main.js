const readNodesFromFile = require('./fileUtils');
const fileName = process.argv[2];

const createNode = (data, leftChild, rightChild) => ({
	data,
	leftChild,
	rightChild
});

const createBinaryTree = (nodesFromFileList) => {
	const binaryTree = {
		root: null,
		nodes: {}
	};

	nodesFromFileList.forEach((node) => {
		const { nodeNumber, parentNodeNumber, childType, data } = node;

		// create new node in tree if did not exist, if exists only change data
		binaryTree.nodes[nodeNumber] === undefined
			? (binaryTree.nodes[nodeNumber] = createNode(data, null, null))
			: (binaryTree.nodes[nodeNumber].data = data);

		// assign actual node's parent the corresponding child
		// if parent node does not exist, we create it
		if (parentNodeNumber === '0') {
			binaryTree.root = nodeNumber;
		} else {
			if (childType === 's') {
				// if is left child
				if (!binaryTree.nodes[parentNodeNumber]) {
					binaryTree.nodes[parentNodeNumber] = createNode('', nodeNumber, null);
				} else {
					binaryTree.nodes[parentNodeNumber].leftChild = nodeNumber;
				}
			} else if (childType === 'd') {
				// if is right child
				if (!binaryTree.nodes[parentNodeNumber]) {
					binaryTree.nodes[parentNodeNumber] = createNode('', null, nodeNumber);
				} else {
					binaryTree.nodes[parentNodeNumber].rightChild = nodeNumber;
				}
			}
		}
	});

	return binaryTree;
};

const inOrder = (node, binaryTree) => {
	if (node === null) {
		return;
	}

	inOrder(binaryTree.nodes[node].leftChild, binaryTree);

	console.log(binaryTree.nodes[node].data);

	inOrder(binaryTree.nodes[node].rightChild, binaryTree);
};

const main = async () => {
	const nodesFromFileList = await readNodesFromFile(fileName);
	const binaryTree = createBinaryTree(nodesFromFileList);
	if (binaryTree.root) {
		inOrder(binaryTree.root, binaryTree);
		return;
	}
	console.log('Datele introduse nu sunt valide!');
};

main();
