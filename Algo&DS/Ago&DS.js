//bubble sort

// ## **Ex 1: Bubble Sort**

// Given an Integer **N** and a list **arr**. Sort the array using bubble sort algorithm.

// **Example 1:**

// ```
// Input:
// N = 5
// arr[] = {4, 1, 3, 9, 7}
// Output:
// 1 3 4 7 9

// ```

// // const bubbleSort =(N, arr) => {
// // for (let i = 0; i < N; i++) 
// //     for(let j = 0; j < arr.length-i; j++) {
// //         if(arr[j] > arr[j+1]) {
// //             let temp = arr[j];
// //             arr[j] = arr[j+1];
// //             arr[j+1] = temp;
// //         }
// //     }
// //     console.log(arr)
// // }
// // let arr = [4,1,3,9,7]
// bubbleSort(5,arr)

// exercise 2- binary search

// let recursiveFunction = function (arr, x, start, end) {


// 	if (start > end) return false;


// 	let mid = Math.floor((start + end) / 2);


// 	if (arr[mid] === x) return true;


// 	if (arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid - 1);
// 	else

	
// 		return recursiveFunction(arr, x, mid + 1, end);
// }

// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
// 	console.log("Element found!");
// }
// else { console.log("Element not found!"); }

// x = 6;

// if (recursiveFunction(arr, x, 0, arr.length - 1)) {
// 	console.log("Element found!");
// }
// else { console.log("Element not found!"); }

//exercice 3 - linked list 
 
// let array1=[]

// class Node {
//   constructor(data, next = null, prev = null) {
//     this.data = data;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let node = new Node(val);
//     if (!this.head) {
//       // check if the list is empty to set the first node as head and tail
//       this.head = node;
//       this.tail = node;
//     } else {
//       let temp = this.tail;
//       this.tail = node;
//       node.prev = temp;
//       temp.next = node;
//     }
//     this.length++; // this is the nodes counter
//     return this;
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }



// listtoarray(){
// let current=this.head
// while(current){
// array1.push(current.data)
// current=current.next
// }
// console.log(array1)
// }

//  isPalindrome() {
//     let length = array1.length;
//     for (let i = 0; i < Math.floor(length / 2); i++) {
//       if (array1[i] !== array1[length - 1 - i]) {
//         return false;
//       }
//     }

//     return true;
//   }


// }

// const ll = new LinkedList();

// ll.push(500);
// ll.push(300);
// ll.push(300);
// ll.push(500);

// ll.print();

// console.log("/////////////////");

// ll.print();


// ll.listtoarray()

// console.log(array1)

// console.log(ll.isPalindrome());


//search-------------------

 class Node {
      constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
      }
    }
    
    class LinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    
      push(val) {
        let node = new Node(val);
        if (!this.head) {
          // check if the list is empty to set the first node as head and tail
          this.head = node;
          this.tail = node;
        } else {
          let temp = this.tail;
          this.tail = node;
          node.prev = temp;
          temp.next = node;
        }
        this.length++; // this is the nodes counter
        return this;
      }
    
      print() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
    }

    const ll = new LinkedList();

    ll.push(500);
    ll.push(300);
    ll.push(300);
    ll.push(500);
   
    ll.print();
