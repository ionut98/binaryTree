const fs = require('fs');
const readLine = require('readline');

// folosit pentru a citi linie cu linie din fisier
const readNodesFromFile = async fileName => {
  const fileStream = fs.createReadStream(fileName);

  const lines = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity // toate instantele de CR LF ('\r\n') din fisier sunt considerate un singur line break
  });

  const nodesFromFileList = [];

  for await (const line of lines) {
    const nodeDetails = line.split(',');
    nodesFromFileList.push({
      nodeNumber: nodeDetails[0],
      parentNodeNumber: nodeDetails[1],
      childType: nodeDetails[2],
      data: nodeDetails[3]
    });
  }

  return nodesFromFileList;
};

module.exports = readNodesFromFile;
