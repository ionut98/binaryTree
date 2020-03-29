class BinaryTree:
    def __init__(self):
        self.root = None
        self.nodes = {}

    @property
    def root(self):
        return self.__root

    @root.setter
    def root(self, root):
        self.__root = root

    @property
    def nodes(self):
        return self.__nodes

    @nodes.setter
    def nodes(self, nodes):
        self.__nodes = nodes

    def __repr__(self):
        return "{" + "root:{root}, nodes:{nodes}".format(root=self.root, nodes=self.nodes) + "}"
