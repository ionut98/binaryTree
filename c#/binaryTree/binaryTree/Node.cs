using System;
using System.Collections.Generic;
using System.Text;

namespace binaryTree
{
    class Node
    {
        public String Data { get; set; }
        public String LeftChild { get; set; }
        public String RightChild { get; set; }

        public Node(String data, String leftChild, String rightChild)
        {
            this.Data = data;
            this.LeftChild = leftChild;
            this.RightChild = rightChild;
        }

        public override string ToString()
        {
            return "{" + "data:'" + Data + "', " + "leftChild:'" + LeftChild + "', " + "rightChild:'" + RightChild + "'}";
        }
    }
}
