class DynamicArray {
    #arr;
    #size;
    #capacity;
    #GROWTH = 2;

    constructor(cap = 0, fill = 0) {
        // Must allocate internal buffer with length = cap
        // Must set size = cap
        // Must set capacity = cap
        // Must fill all elements with value "fill"
        // If cap < 0 → throw Error
        if (cap < 0) {
            throw new Error("cap < 0, cap --> [0...N]");
        }
        this.#arr = new Array(cap).fill(fill);
        this.#size = cap;
        this.#capacity = cap;
    }

    /* ================= Capacity ================= */

    size() {
        return this.#size;
    }

    capacity() {
        // Must return allocated buffer size
        return this.#capacity;
    }

    empty() {
        return this.#size === 0;
        // Must return true if size === 0, otherwise false
    }

    reserve(n) {
        // If n <= capacity → do nothing
        // If n > capacity:
        //   - allocate new buffer of size n
        //   - copy first "size" elements
        //   - replace old buffer
        //   - update capacity
        if (n > this.#capacity) {
            const newArray = new Array(n);
            for (let i = 0; i < this.#size; i++) {
                newArray[i] = this.#arr[i];
            }
            this.#arr = newArray;
            this.#capacity = n;
        }

    }

    shrinkToFit() {
        // Must reallocate buffer so that:
        // capacity === size
        // Only valid elements are kept
        this.#arr = this.#arr.slice(0, this.#size);
        this.#capacity = this.#size;
    }

    clear() {
        // Must set size = 0
        // Capacity must remain unchanged
        return this.#size = 0;

    }

    /* ================= Element Access ================= */

    at(i) {
        // If i < 0 or i >= size → throw Error
        // Otherwise return element at index i
        if (i < 0 || i > this.#size - 1) {
            throw new Error("input index not rage[1...Size]");
        }
        return this.#arr[i];
    }

    set(i, value) {
        // If index invalid → throw Error
        // If value is not a number → throw Error
        // Otherwise overwrite element at index i
        if (i < 0 || i > this.#size) {
            throw new Error("Error set i ");
        }
        if (typeof value !== "number") {
            throw new Error("value not number");
        }
        this.#arr[i] = value;
    }

    front() {
        // Must return first element
        // Equivalent to at(0)
        return this.at(0);
    }

    back() {
        // Must return last element
        // Equivalent to at(size - 1)
        return this.at(this.#size - 1);
    }

    toArray() {
        // Must return a normal JS array
        // Must include only elements [0 ... size-1]
        // Must NOT include unused capacity
        return this.#arr.slice(0, this.#size - 1);
    }

    /* ================= Modifiers ================= */



    pushBack(value) {
        // If value is not number → throw Error
        // If size === capacity:
        //   - grow capacity (usually capacity * 2)
        // Append value at the end
        // Increase size by 1
        if (typeof value !== "number") {
            throw new Error("value is not number");
        }
        if (this.#size === this.#capacity) {
            this.#resize(this.#capacity === 0 ? 1 : this.#capacity * this.#GROWTH);
        }
        this.#arr[this.#size++] = value;


    }

    popBack() {
        // If empty → throw Error
        // Remove last element
        // Decrease size by 1
        // Return removed value
        if (this.#size == 0) {
            throw new Error("throw Error");
        }
        const value = this.#arr[this.#size - 1];
        this.#size--;
        return value;
    }

    insert(pos, value) {
        // If pos < 0 or pos > size → throw Error
        // If buffer full → resize
        // Shift elements right from pos
        // Insert value at pos
        // Increase size
        if (pos < 0 || pos > this.#size) {
            throw new Error("Position out of bounds");
        }
        for (let i = this.#size; i > pos; i--) {
            this.#arr[i] = this.#arr[i - 1];
        }

        this.#arr[pos] = value;
        return pos;
    }

    erase(pos) {
        // If pos invalid → throw Error
        // Shift elements left from pos
        // Decrease size
        if (pos < 0 || pos > this.#size) {
            throw new Error("pos invalid");
        }
        for (let i = pos; i < this.#size - 1; ++i) {
            this.#arr[i] = this.#arr[i + 1];
        }
        this.#size--;
    }

    #resize(n) {
        // Must allocate new buffer of size n
        // Copy min(size, n) elements
        // If n < size → truncate size
        // Update capacity
        const newArr = new Array(n);
        const copysizeEle = Math.min(this.#size, n);
        for (let i = 0; i < copysizeEle; ++i) {
            newArr[i] = this.#arr[i];
        }

    }

    swap(i, j) {
        // If any index invalid → throw Error
        // Swap values at indices i and j
        if (i < 0 || i > this.#size || j < 0 || j > this.#size) {
            throw new Error("index output no define");
        }
        let tmp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = tmp;
    }

    /* ================= Iteration ================= */

    [Symbol.iterator]() {
        // Must allow:
        // for (let x of arr)
        // Should iterate from index 0 to size-1
        let index = 0;
        const arr = this;
        return {
            [Symbol.iterator]() { return this; },
            next() {
                if (index < arr.#size) {
                    return { value: arr.#arr[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }

    values() {
        // Must return iterator over values
        // Same behavior as Symbol.iterator
        return this[Symbol.iterator]();
    }

    keys() {
        // Must return iterator over indices
        // Values: 0, 1, 2, ... size-1
        let index = 0;
        const arr = this;
        return {
             [Symbol.iterator]() { return this; },
            next() {
                if (index < arr.#size) {
                    return { value: index++, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }

    entries() {
        // Must return iterator over [index, value] pairs
        // Example: [0, 10], [1, 20], ...
        let index = 0;
        const arr = this;
        return {
            next() {
                if (index < arr.#size) {
                    return { value: [index, arr.#arr[index++]], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }

    /* ================= High Order ================= */

    forEach(fn) {
        // Must call fn(value, index, thisArray)
        // For each element from 0 to size-1
        // Must not modify the array
        for (let i = 0; i < this.#size; ++i) {
            fn(this.#arr[i], i, this);
        }
    }

    map(fn) {
        // Must return new DynamicArray
        // Each element = fn(oldValue, index, thisArray)
        const result = new DynamicArray(this.#size);
        for (let i = 0; i < this.#size; ++i) {
            result.pushBack(fn(this.#arr[i], i, this));
        }
        return result;
    }

    filter(fn) {
        // Must return new DynamicArray
        // Only elements where fn(...) === true
        const result = new DynamicArray(0);
        for (let i = 0; i < this.#size; ++i) {
            if (fn(this.#arr[i], i, this)) {
                result.pushBack(this.#arr[i], i, this);
            }
        }
        return result;
    }

    reduce(fn, initial) {
        // If empty and initial undefined → throw Error
        // If initial exists:
        //   acc = initial, start from index 0
        // Else:
        //   acc = first element, start from index 1
        // Must return accumulated value
        if (this.#size === 0 && initial === undefined) {
            throw new Error("Reduce of empty array with no initial value");
        }
        let acc = setInterval;
        let start = 0;

        if (acc == undefined) {
            acc = this[0];
            start = 1;
        }

        for (let i = start; i < this.lenght; ++i) {
            acc = fn(start, this.#arr[i], i, this)
        }
        return acc;
    }

    some(fn) {
        // Must return true if any element satisfies fn
        // Otherwise false
        for (let i = 0; i < this.#size; ++i) {
            if (fn(this.#arr[i], i, this)) {
                return true;
            }
        }
        return false;
    }

    every(fn) {
        // Must return true only if all elements satisfy fn
        for (let i = 0; i < this.#size; ++i) {
            if (!fn(this.#arr[i], i, this)) {
                return false;
            }
        }
        return true;
    }

    find(fn) {
        // Must return first value where fn(...) === true
        // If not found → return undefined
        for (let i = 0; i < this.#size; ++i) {
            if (fn(this.#arr[i], i, this)) {
                return this.#arr[i];
            }
        }
        return undefined;
    }

    findIndex(fn) {
        // Must return index of first match
        // If not found → return -1
        for (let i = 0; i < this.#size; ++i) {
            if (fn(this.#size, i, this)) {
                return i;
            }
        }
        return -1;
    }

    includes(value) {
        // Must return true if value exists in array
        // Otherwise false
        for (let i = 0; i < this.#size; ++i) {
            if (this.#arr[i] === value) {
                return true;
            }
        }
        return false;
    }

    /* ================= Extensions ================= */

    reverse() {
        // Must reverse elements in-place
        // No extra array allowed
        for (let i = 0; i < Math.floor(this.#size / 2); ++i) {
            let tmp = this.#arr[i];
            this.#arr[i] = this.#arr[this.#size - i - 1];
            this.#arr[this.#size - i - 1] = tmp;
        }
    }

    sort(compareFn = (a, b) => a - b) {
        // Must sort array in-place
        // Must NOT use built-in Array.sort
        // You must implement your own algorithm
        const quickSort = (left, right) => {
            if (left >= right) {
                return;
            }
            const pivot = this.#arr[right];
            let i = left;
            for (let j = left; j < right; ++j) {
                if (compareFn(this.#arr[j], pivot) < 0) {
                    let tmp = this.#arr[i];
                    this.#arr[i] = this.#arr[j];
                    this.#arr[j] = tmp;
                }
            }
            const temp = this.#arr[i];
            this.#arr[i] = this.#arr[right];
            this.#arr[right] = temp;
            quickSort(left, i - 1);
            quickSort(i + 1, right);
        }
        quickSort(0, this.#size - 1);
    }

    clone() {
        // Must return deep copy of this DynamicArray
        const result = new DynamicArray(this.#size);
        for (let i = 0; i < this.#size; ++i) {
            result.pushBack(this.#arr[i]);
        }
        return result;
    }

    equals(other) {
        // Must return true if:
        // same size AND all elements equal
        if (this.#size !== other.size) {
            return false;
        }
        for (let i = 0; i < this.#size; i++) {
            if (this.#arr[i] !== other.get(i)) {
                return false;
            }
        }
        return true;
    }
}


const a = new DynamicArray(3, 1);

console.log("size:", a.size());
console.log("capacity:", a.capacity());
console.log("empty:", a.empty());

a.reserve(10);
console.log( a.capacity());

a.pushBack(5);
a.pushBack(7);

console.log(a.toArray());



