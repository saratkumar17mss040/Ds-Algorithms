/* 
QuickFind is a simple algorithm where we have two operations union and connected
union - merge two individual components into a single component
connected - check whether two components are in same component or not 

Time complexity

array initialization - O(n) 
union operation - O(n^2) as it access n^2 arrays for n union commands on n objects
connected - find operation - O(1)

Quick-find defect

Union too expensive (N array accesses).
Trees are flat, but too expensive to keep them flat. 
*/


class QuickFind {
	constructor(sizeOfArray) {
		this.sizeOfArray = sizeOfArray;
		this.arr = new Array(this.sizeOfArray);

		for (let i = 0; i < this.sizeOfArray; i++) {
			this.arr[i] = i;
		}
	}

	connected(a, b) {
		return this.arr[a] === this.arr[b];
	}

	union(a, b) {
		const aId = this.arr[a];
		const bId = this.arr[b];
		for (let i = 0; i < this.arr.length; i++) {
			if (this.arr[i] === aId) {
				this.arr[i] = bId;
			}
		}
	}
}

const qF = new QuickFind(5);
console.log(qF.arr);
console.log(qF.connected(0, 1));
qF.union(0, 1);
console.log(qF.connected(0, 1));
console.log(qF.arr);
qF.union(1, 2);
console.log(qF.arr);
