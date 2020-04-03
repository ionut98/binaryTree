<?php

class Node
{
    private $data;
    private $leftChild;
    private $rightChild;

    public function __construct($data, $leftChild, $rightChild)
    {
        $this->data = $data;
        $this->leftChild = $leftChild;
        $this->rightChild = $rightChild;
    }

    /**
     * @return string
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * @return string
     */
    public function getLeftChild()
    {
        return $this->leftChild;
    }

    /**
     * @return string
     */
    public function getRightChild()
    {
        return $this->rightChild;
    }

    /**
     * @param string $data
     */
    public function setData($data)
    {
        $this->data = $data;
    }

    /**
     * @param string $leftChild
     */
    public function setLeftChild($leftChild)
    {
        $this->leftChild = $leftChild;
    }

    /**
     * @param string $rightChild
     */
    public function setRightChild($rightChild)
    {
        $this->rightChild = $rightChild;
    }
}