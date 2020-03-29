from BinaryTree import BinaryTree
from FileUtils import read_nodes_from_file
from Node import Node

import sys


def create_binary_tree(nodes_from_files):
    binary_tree = BinaryTree()

    for node in nodes_from_files:
        if binary_tree.nodes.get(node.node_number) is None:
            binary_tree.nodes[node.node_number] = Node(node.data, None, None)
        else:
            binary_tree.nodes[node.node_number].data = node.data

        if node.parent_node_number == '0':
            binary_tree.root = node.node_number
        else:
            if node.child_type == 's':
                # if is left child
                if binary_tree.nodes.get(node.parent_node_number) is None:
                    binary_tree.nodes[node.parent_node_number] = Node('', node.node_number, None)
                else:
                    binary_tree.nodes[node.parent_node_number].left_child = node.node_number
            elif node.child_type == 'd':
                # if is right child
                if binary_tree.nodes.get(node.parent_node_number) is None:
                    binary_tree.nodes[node.parent_node_number] = Node('', None, node.node_number)
                else:
                    binary_tree.nodes[node.parent_node_number].right_child = node.node_number

    return binary_tree


def in_order(node, binary_tree):
    if node is None:
        return

    in_order(binary_tree.nodes.get(node).left_child, binary_tree)
    print(binary_tree.nodes.get(node).data)
    in_order(binary_tree.nodes.get(node).right_child, binary_tree)


def main():
    nodes_from_file_list = read_nodes_from_file(sys.argv[1])
    print(nodes_from_file_list)
    binary_tree = create_binary_tree(nodes_from_file_list)
    if binary_tree.root is not None:
        in_order(binary_tree.root, binary_tree)
        return
    print('Datele introduse sunt incorecte')


if __name__ == '__main__':
    main()
