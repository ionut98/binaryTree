package com.company;

import java.util.ArrayList;

public class Main {

    public static BinaryTree createBinaryTree(ArrayList<NodeFromFile> nodesFromFiles) {

        BinaryTree binaryTree = new BinaryTree();

        for (NodeFromFile node : nodesFromFiles) {

            if (binaryTree.getNodes().get(node.getNodeNumber()) == null) {
                binaryTree.getNodes().put(
                        node.getNodeNumber(),
                        new Node(
                                node.getData(),
                                null,
                                null)
                );
            } else {
                binaryTree.getNodes().get(node.getNodeNumber()).setData(node.getData());
            }

            if (node.getParentNodeNumber().equals("0")) {
                binaryTree.setRoot(node.getNodeNumber());
            } else {

                if (node.getChildType().equals("s")) {
                    // if is left child
                    if (binaryTree.getNodes().get(node.getParentNodeNumber()) == null) {
                        binaryTree.getNodes().put(
                                node.getParentNodeNumber(),
                                new Node("", node.getNodeNumber(), null)
                        );
                    } else {
                        binaryTree.getNodes().get(node.getParentNodeNumber()).setLeftChild(node.getNodeNumber());
                    }

                } else if (node.getChildType().equals("d")) {
                    // if is right child
                    if (binaryTree.getNodes().get(node.getParentNodeNumber()) == null) {
                        binaryTree.getNodes().put(
                                node.getParentNodeNumber(),
                                new Node("", null, node.getNodeNumber())
                        );
                    } else {
                        binaryTree.getNodes().get(node.getParentNodeNumber()).setRightChild(node.getNodeNumber());
                    }
                }
            }
        }

        return binaryTree;
    }

    public static void inOrder(String nodeNumber, BinaryTree binaryTree) {
        if(nodeNumber == null){
            return;
        }

        inOrder(binaryTree.getNodes().get(nodeNumber).getLeftChild(), binaryTree);

        System.out.println(binaryTree.getNodes().get(nodeNumber).getData());

        inOrder(binaryTree.getNodes().get(nodeNumber).getRightChild(), binaryTree);
    }

    public static void main(String[] args) {

        ArrayList<NodeFromFile> nodesFromFiles = FileUtils.readNodesFromFile(args[0]);
        BinaryTree binaryTree = createBinaryTree(nodesFromFiles);
        if(binaryTree.getRoot() == null) {
            System.out.println("Datele introduse nu sunt valide!");
            return;
        }
        inOrder(binaryTree.getRoot(), binaryTree);
    }
}
