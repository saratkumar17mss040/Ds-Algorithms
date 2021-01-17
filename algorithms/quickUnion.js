/* 
QuickUnion is a simple algorithm where we have three operations union, root, connected
union - finds root of two trees using root() and connects the a root to b root by assigning the value of b root
root - finds the parent root for the given component
connected - finds whether they belong to same component or not by seeing their roots

Time complexity

array initialization - O(n) 
union operation - O(n)
connected - find operation - O(n)

Quick-union defect

Trees can get tall.
Find too expensive (could be N array accesses).

*/


class QuickUnion {
	constructor(sizeOfArray) {
		this.sizeOfArray = sizeOfArray;
		this.arr = new Array(this.sizeOfArray);

		for (let i = 0; i < this.arr.length; i++) {
			this.arr[i] = i;
		}
	}

	root(a) {
		while (a != this.arr[a]) a = this.arr[a];
		return a;
	}

	connected(a, b) {
		return this.root(a) === this.root(b);
    }
    
    union(a, b) {
        const aId = this.root(a);
        const bId = this.root(b);
        this.arr[aId] = bId;
    }
}

const qU = new QuickUnion(5);
console.log(qU.arr);
console.log(qU.connected(0, 1));
qU.union(0, 1);
console.log(qU.connected(0, 1));
console.log(qU.arr);
qU.union(1, 2);
console.log(qU.arr);
