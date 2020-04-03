<?php

include './BinaryTree.php';
include './FileUtils.php';
include './Node.php';

class Main
{
    public static function createBinaryTree($nodesFromFiles)
    {
        $binaryTree = new BinaryTree();
        $nodes = $binaryTree->getNodes();

        foreach ($nodesFromFiles as $node) {
            if (!array_key_exists(
                $node->getNodeNumber(),
                $nodes)
            ) {
                $nodes[$node->getNodeNumber()] = new Node(
                    $node->getData(),
                    null,
                    null
                );
            } else {
                $nodes[$node->getNodeNumber()]->setData($node->getData());
            }

            if ($node->getParentNodeNumber() == '0') {
                $binaryTree->setRoot($node->getNodeNumber());
            } else {

                if ($node->getChildType() == 's') {
                    // if is left child
                    if (!array_key_exists(
                        $node->getParentNodeNumber(),
                        $nodes)
                    ) {
                        $nodes[$node->getParentNodeNumber()] = new Node(
                            "",
                            $node->getNodeNumber(),
                            null);
                    } else {
                        $nodes[$node->getParentNodeNumber()]->setLeftChild($node->getNodeNumber());
                    }
                } else if ($node->getChildType() == 'd') {
                    // if is right child
                    if (!array_key_exists(
                        $node->getParentNodeNumber(),
                        $nodes)
                    ) {
                        $nodes[$node->getParentNodeNumber()] = new Node(
                            "",
                            null,
                            $node->getNodeNumber());
                    } else {
                        $nodes[$node->getParentNodeNumber()]->setRightChild($node->getNodeNumber());
                    }
                }
            }
        }
        $binaryTree->setNodes($nodes);
        return $binaryTree;
    }

    public static function inOrder($nodeNumber, $binaryTree)
    {
        if ($nodeNumber == null) {
            return;
        }

        self::inOrder($binaryTree->getNodes()[$nodeNumber]->getLeftChild(), $binaryTree);
        echo $binaryTree->getNodes()[$nodeNumber]->getData();
        self::inOrder($binaryTree->getNodes()[$nodeNumber]->getRightChild(), $binaryTree);
    }
}

$nodesFromFile = FileUtils::readNodesFromFile($argv[1]);
$binaryTree = Main::createBinaryTree($nodesFromFile);
if ($binaryTree->getRoot() == null) {
    echo "Datele introduse nu sunt valide!";
    return;
}
Main::inOrder($binaryTree->getRoot(), $binaryTree);
