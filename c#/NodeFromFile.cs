using System;
using System.Collections.Generic;
using System.Text;

namespace binaryTree
{
    class NodeFromFile
    {
        public string NodeNumber { get; set; }
        public string ParentNodeNumber { get; set; }
        public string ChildType { get; set; }
        public string Data { get; set; }

        public NodeFromFile(string nodeNumber, string parentNodeNumber, string childType, string data)
        {
            this.NodeNumber = nodeNumber; 
            this.ParentNodeNumber= parentNodeNumber; 
            this.ChildType = childType; 
            this.Data = data; 
        }

        public override string ToString()
        {
            return "{" + "nodeNumber:'" + NodeNumber + "', " 
                       + "parentNodeNumber:'" + ParentNodeNumber + "', " 
                       + "childType:'" + ChildType + "', "
                       + "data:'" + Data +
                  "'}";
        }
    }
}
