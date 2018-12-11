struct Node {
    int data;
    Node* ptr;

    Node( int data, Node* ptr = nullptr ) : data(data), ptr(ptr) {
    }

    Node* XOR(Node* a, Node* b);

    void insert(int data) {
        Node* newNode = new Node(data);
        Node* prev = nullptr;
        Node* curr = this;
        Node* next = XOR(ptr, prev);

        while ( next != nullptr ) {
            prev = curr;
            curr = next;
            next = XOR(ptr, prev);
        }

        next = newNode;
        ptr = XOR(prev, next);
    }

    int get(unsigned int index) {
        Node* prev = nullptr;
        Node* curr = this;
        Node* next = XOR(ptr, prev);

        for ( unsigned int i = 0; i < index; i++ ) {
            prev = curr;
            curr = next;
            next = XOR(ptr, prev);
            
            if ( curr == nullptr ) {
                throw NotFound();
            }
        }
        return curr->data;
    }
};

Node* Node::XOR(Node* a, Node* b) {
    return (Node*)((unsigned int)a ^ (unsigned int)b);
}