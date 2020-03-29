class Node:
    def __init__(self, data, left_child, right_child):
        self.data = data
        self.left_child = left_child
        self.right_child = right_child

    @property
    def data(self):
        return self.__data

    @data.setter
    def data(self, data):
        self.__data = data

    @property
    def left_child(self):
        return self.__left_child

    @left_child.setter
    def left_child(self, left_child):
        self.__left_child = left_child

    @property
    def right_child(self):
        return self.__right_child

    @right_child.setter
    def right_child(self, right_child):
        self.__right_child = right_child

    def __repr__(self):
        return "{" + "data:{data}, leftChild:{leftChild}, rightChild:{rightChild}".format(data=self.data,
                                                                                          leftChild=self.left_child,
                                                                                          rightChild=self.right_child) + "}"