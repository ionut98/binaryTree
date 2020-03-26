using System;
using System.Collections.Generic;
using System.Text;

namespace binaryTree
{
    class BinaryTree
    {
        public string Root { get; set; }
        public Dictionary<string, Node> Nodes {get; set;}

        public BinaryTree()
        {
            this.Root = null;
            this.Nodes = new Dictionary<string, Node>();
        } 


        public override string ToString()
        {
            var nodesList = "";
            foreach (var node in Nodes)
            {
                nodesList += (node.ToString() + "\n");
            }

            return "BinaryTree {" + "root:" + Root + ", nodes:" + nodesList + "}";
        }
    }
}
