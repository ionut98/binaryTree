<?php


class NodeFromFile
{
    private $nodeNumber;
    private $parentNodeNumber;
    private $childType;
    private $data;

    public function __construct($nodeNumber, $parentNodeNumber, $childType, $data)
    {
        $this->nodeNumber = $nodeNumber;
        $this->parentNodeNumber = $parentNodeNumber;
        $this->childType = $childType;
        $this->data = $data;
    }

    /**
     * @return string
     */
    public function getChildType()
    {
        return $this->childType;
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
    public function getNodeNumber()
    {
        return $this->nodeNumber;
    }

    /**
     * @return string
     */
    public function getParentNodeNumber()
    {
        return $this->parentNodeNumber;
    }

    /**
     * @param string $childType
     */
    public function setChildType($childType)
    {
        $this->childType = $childType;
    }

    /**
     * @param string $data
     */
    public function setData($data)
    {
        $this->data = $data;
    }

    /**
     * @param string $nodeNumber
     */
    public function setNodeNumber($nodeNumber)
    {
        $this->nodeNumber = $nodeNumber;
    }

    /**
     * @param string $parentNodeNumber
     */
    public function setParentNodeNumber($parentNodeNumber)
    {
        $this->parentNodeNumber = $parentNodeNumber;
    }
}