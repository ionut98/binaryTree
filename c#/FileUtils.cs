using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace binaryTree
{
    class FileUtils
    {
        public static List<NodeFromFile> ReadNodesFromFile(string fileName)
        {
            List<NodeFromFile> nodesFromFileList = new List<NodeFromFile>();

            try
            {
                string[] allLines = File.ReadAllLines(fileName);
                foreach (var line in allLines)
                {
                    var nodeDetails = line.Split(',');
                    nodesFromFileList.Add(
                            new NodeFromFile(
                                 nodeDetails[0],
                                 nodeDetails[1],
                                 nodeDetails[2],
                                 nodeDetails[3]
                                ));
                }
            } catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return nodesFromFileList;
        }
    }
}
