package com.company;

import java.util.HashMap;

public class BinaryTree {
    private String root;
    private HashMap<String, Node> nodes;

    public BinaryTree() {
        this.root = null;
        this.nodes = new HashMap<>();
    }

    public String getRoot() {
        return root;
    }

    public void setRoot(String root) {
        this.root = root;
    }

    public HashMap<String, Node> getNodes() {
        return nodes;
    }

    public void setNodes(HashMap<String, Node> nodes) {
        this.nodes = nodes;
    }

    @Override
    public String toString() {
        return "BinaryTree {" +
               "root:'" + root + '\'' +
               ", nodes:" + nodes +
               '}';
    }
}
