using System;
using System.Collections.Generic;

namespace binaryTree
{
    class Program
    {
        static BinaryTree CreateBinaryTree(List<NodeFromFile> nodesFromFile)
        {
            BinaryTree binaryTree = new BinaryTree();

            foreach (var node in nodesFromFile)
            {
                if (!binaryTree.Nodes.ContainsKey(node.NodeNumber))
                {
                    binaryTree.Nodes.Add(
                        node.NodeNumber,
                        new Node(node.Data, null, null)
                    );
                }
                else
                {
                    binaryTree.Nodes[node.NodeNumber].Data = node.Data;
                }


                if (node.ParentNodeNumber.Equals("0"))
                {
                    binaryTree.Root = node.NodeNumber;
                }
                else
                {
                    if (node.ChildType.Equals("s"))
                    {
                        //if is left child
                        if (!binaryTree.Nodes.ContainsKey(node.ParentNodeNumber))
                        {
                            binaryTree.Nodes.Add(
                                node.ParentNodeNumber,
                                new Node("", node.NodeNumber, null)
                            );
                        }
                        else
                        {
                            binaryTree.Nodes[node.ParentNodeNumber].LeftChild = node.NodeNumber;
                        }
                    }
                    else if (node.ChildType.Equals("d"))
                    {
                        //if is right child
                        if (!binaryTree.Nodes.ContainsKey(node.ParentNodeNumber))
                        {
                            binaryTree.Nodes.Add(
                                node.ParentNodeNumber,
                                new Node("", null, node.NodeNumber)
                            );
                        }
                        else
                        {
                            binaryTree.Nodes[node.ParentNodeNumber].RightChild = node.NodeNumber;
                        }
                    }

                }
            }

            return binaryTree;
        }

        static void InOrder(string nodeNumber, BinaryTree binaryTree)
        {
            if(nodeNumber == null)
            {
                return;
            }

            InOrder(binaryTree.Nodes[nodeNumber].LeftChild, binaryTree);

            Console.WriteLine(binaryTree.Nodes[nodeNumber].Data);

            InOrder(binaryTree.Nodes[nodeNumber].RightChild, binaryTree);
        }

        static void Main(string[] args)
        {
            var nodesFromFile = FileUtils.ReadNodesFromFile(args[0]);
            BinaryTree binaryTree = CreateBinaryTree(nodesFromFile);

            if (binaryTree.Root == null)
            {
                Console.WriteLine("Datele introduse nu sunt valide!");
                return;
            }
            InOrder(binaryTree.Root, binaryTree);

        }
    }
}
