let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);
arr.push(20);
console.log(arr);
arr.push(30, 22);
console.log(arr);
let anotherArr = [1, 2, 3];
arr.push(anotherArr);
console.log(arr);
arr.pop();
console.log(arr);
//removes elements from the array from beginning
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
//add elements from the starting of the array
// arr.splice(0, 3); deep copy
console.log(arr);
//start,deletcount,item1 adds item1,
console.log(arr.slice(0, 3)); //deletes one element (start,end) doesnt use zero based indexing
//leave the start index and end also include end index
console.log(arr);
//shallow and deepcopy
