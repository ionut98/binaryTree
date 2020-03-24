package com.company;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class FileUtils {

    public static ArrayList<NodeFromFile> readNodesFromFile(String fileName) {

        ArrayList<NodeFromFile> nodesFromFileList = new ArrayList<>();

        try {
            List<String> allLines = Files.readAllLines(Paths.get(fileName));
            for (String line : allLines) {
                String[] nodeDetails = line.split(",");
                nodesFromFileList.add(
                        new NodeFromFile(
                                nodeDetails[0],
                                nodeDetails[1],
                                nodeDetails[2],
                                nodeDetails[3]
                        )
                );
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return nodesFromFileList;
    }
}
