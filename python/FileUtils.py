from NodeFromFile import NodeFromFile


def read_nodes_from_file(file_name):
    nodes_from_file_list = []

    with open(file_name) as lines:
        for line in lines:
            splitted_line = line.rstrip().split(',')
            nodes_from_file_list.append(
                NodeFromFile(splitted_line[0], splitted_line[1], splitted_line[2], splitted_line[3]))
    return nodes_from_file_list
