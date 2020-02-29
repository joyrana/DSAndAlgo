// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(node) {
        this.head = new Node(node, this.head);
    }
    size() {
        let node = this.head;
        let size = 0;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
        if (!node) {
            return null
        }
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        // let node = this.head;
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        // while (node) {
        //     if (node.next && node.next.next === null) {
        //         node.next = null;
        //     }
        //     node = node.next;
        // }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        const last = this.getLast();
        if(last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data); 
        }
    }
    getAt(index) {
        
    }
}

module.exports = { Node, LinkedList };
