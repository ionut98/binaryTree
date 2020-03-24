package com.company;

public class NodeFromFile {
    private String nodeNumber;
    private String parentNodeNumber;
    private String childType;
    private String data;

    public NodeFromFile(String nodeNumber, String parentNodeNumber, String childType, String data) {
        this.nodeNumber = nodeNumber;
        this.parentNodeNumber = parentNodeNumber;
        this.childType = childType;
        this.data = data;
    }

    public String getNodeNumber() {
        return nodeNumber;
    }

    public void setNodeNumber(String nodeNumber) {
        this.nodeNumber = nodeNumber;
    }

    public String getParentNodeNumber() {
        return parentNodeNumber;
    }

    public void setParentNodeNumber(String parentNodeNumber) {
        this.parentNodeNumber = parentNodeNumber;
    }

    public String getChildType() {
        return childType;
    }

    public void setChildType(String childType) {
        this.childType = childType;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "{" +
               "nodeNumber:'" + nodeNumber + '\'' +
               ", parentNodeNumber:'" + parentNodeNumber + '\'' +
               ", childType:'" + childType + '\'' +
               ", data:'" + data + '\'' +
               '}';
    }
}
