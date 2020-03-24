package com.company;

public class Node {
    private String data;
    private String leftChild;
    private String rightChild;

    public Node(String data, String leftChild, String rightChild) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(String leftChild) {
        this.leftChild = leftChild;
    }

    public String getRightChild() {
        return rightChild;
    }

    public void setRightChild(String rightChild) {
        this.rightChild = rightChild;
    }

    @Override
    public String toString() {
        return "{" +
               "data:'" + data + '\'' +
               ", leftChild:'" + leftChild + '\'' +
               ", rightChild:'" + rightChild + '\'' +
               '}';
    }
}
