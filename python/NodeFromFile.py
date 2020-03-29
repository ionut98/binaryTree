class NodeFromFile:
    def __init__(self, node_number, parent_node_number, child_type, data):
        self.node_number = node_number
        self.parent_node_number = parent_node_number
        self.child_type = child_type
        self.data = data

    @property
    def node_number(self):
        return self.__node_number

    @property
    def parent_node_number(self):
        return self.__parent_node_number

    @property
    def child_type(self):
        return self.__child_type

    @property
    def data(self):
        return self.__data

    @node_number.setter
    def node_number(self, node_number):
        self.__node_number = node_number

    @parent_node_number.setter
    def parent_node_number(self, parent_node_number):
        self.__parent_node_number = parent_node_number

    @child_type.setter
    def child_type(self, child_type):
        self.__child_type = child_type

    @data.setter
    def data(self, data):
        self.__data = data

    def __repr__(self):
        return "{" + "nodeNumber:{nodeNumber}, parentNodeNumber:{parentNodeNumber}, childType:{childType}, data:{data}".format(
            nodeNumber=self.node_number, parentNodeNumber=self.parent_node_number, childType=self.child_type,
            data=self.data) + "}"