/*
 * Exercise description: 
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 *  push(x) -- Push element x onto stack.
 *  pop() -- Removes the element on top of the stack.
 *  top() -- Get the top element.
 *  getMin() -- Retrieve the minimum element in the stack.
 * 
 */

class MinStack {
    constructor() {
        this.pointer = 0;
        this.storageStruct = {};
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.pointer = this.pointer + 1;
        this.storageStruct[this.pointer] = x;
    };

    /**
     * @return {void}
     */
    pop() {
        delete this.storageStruct[this.pointer]; 
        this.pointer = this.pointer - 1;
    };

    /**
     * @return {number}
     */
    top() {
        return this.storageStruct[this.pointer];
    };

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...Object.values(this.storageStruct));
    };
}
