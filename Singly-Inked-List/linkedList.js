class Node {
    #value;
    #next = null;

    constructor(val = 0) {
        // Must create node storing value = val
        // Must initialize next pointer to null
        this.#value = val;
        this.#next = next;
    }

    get value() {
        // Must return stored value
        return this.#value;
    }

    set value(val) {
        // Must update stored value
        // No type restriction unless required by list contract
    }

    get next() {
        // Must return reference to next node
        // If no next node → return null
    }

    set next(new_node) {
        // Must set next pointer to another Node or null
        // Must not break linked list structure
    }
}

class SinglyLinkedList {
    #head = null;
    #size = 0;

    constructor(iterable) {
        // If iterable is undefined → create empty list
        // If iterable is iterable object:
        //   Must insert all elements in order using push_back
        // If iterable is single value → push_back once
    }

    /* ================= Size & State ================= */

    size() {
        // Must return number of nodes in list
    }

    isEmpty() {
        // Must return true if size === 0
    }

    clear() {
        // Must remove all nodes
        // Must set head = null
        // Must set size = 0
    }

    /* ================= Front Access ================= */

    front() {
        // If empty → return undefined or throw (depending on contract)
        // Otherwise return head node value
    }

    /* ================= Push & Pop ================= */

    push_front(val) {
        // Must create new node
        // Must set new node.next = current head
        // Must update head to new node
        // Must increase size
    }

    push_back(val) {
        // If list empty:
        //   Must create new head node
        // Else:
        //   Must traverse to last node
        //   Must attach new node at end
        // Must increase size
    }

    pop_front() {
        // If empty → return undefined or throw
        // Must remove head node
        // Must move head to next node
        // Must decrease size
        // Must return removed value
    }

    pop_back() {
        // If empty → return undefined or throw
        // If only one element:
        //   Must set head = null
        // Else:
        //   Must traverse to node before last
        //   Must remove last node
        // Must decrease size
        // Must return removed value
    }

    /* ================= Random-like Access ================= */

    at(index) {
        // If index invalid → return undefined or throw
        // Must traverse list from head
        // Must return value at index
        // Complexity O(n)
    }

    insert(index, val) {
        // If index invalid → return or throw
        // If index === 0 → push_front
        // If index === size → push_back
        // Else:
        //   Traverse to index position
        //   Insert new node between nodes
        // Must increase size
    }

    erase(index) {
        // If index invalid → return or throw
        // If index === 0 → pop_front
        // If index === size-1 → pop_back
        // Else:
        //   Traverse to node before index
        //   Skip target node
        // Must decrease size
    }

    remove(value, equals) {
        // Must remove all nodes matching value
        // If equals function exists:
        //   Use equals(a, b)
        // Else:
        //   Use strict equality ===
        // Must return number of removed nodes
    }

    /* ================= Algorithms ================= */

    reverse() {
        // Must reverse list in-place
        // Must not create new nodes
        // Must update head
        // Complexity O(n)
    }

    sort(cmp) {
        // Must sort list using linked-list friendly algorithm
        // Recommended: Merge Sort
        // Must reorder nodes, not values (preferred)
        // Must update head
    }

    merge(list, cmp) {
        // Both lists must be sorted according to cmp
        // If not sorted → throw Error
        // Must merge nodes into single sorted list
        // Must update this list head
        // Must preserve all nodes
        // Complexity O(n)
    }

    /* ================= Utilities ================= */

    toArray() {
        // Must traverse entire list
        // Must return JS array of all node values
    }

    static fromArray(arr) {
        // Must create new list from array values
        // Must preserve order
    }

    /* ================= Iteration ================= */

    [Symbol.iterator]() {
        // Must allow:
        // for (let value of list)
        // Must iterate from head → tail
        // Must not modify list
    }
}