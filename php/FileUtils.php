<?php

include './NodeFromFile.php';

class FileUtils
{
    public static function readNodesFromFile($fileName)
    {
        $nodesFromFile = array();
        $file = fopen($fileName, "r");

        while (!feof($file)) {
            $nodeDetails = explode(",", fgets($file));
            array_push($nodesFromFile, new NodeFromFile($nodeDetails[0], $nodeDetails[1], $nodeDetails[2], $nodeDetails[3]));
        }

        fclose($file);

        return $nodesFromFile;
    }
}
