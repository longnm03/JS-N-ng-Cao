let arr = ["a", "b", "c", "d", "e"];
// SLICE
console.log(arr.slice(2)); // c ,d , e
console.log(arr.slice(2, 4)); // c, d
console.log(arr.slice(-2)); // d , e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b, c
console.log(arr.slice()); // ...arr
console.log([...arr]);
// SPLICE

arr.splice(-1);
console.log(arr); // a, b ,c , d
arr.splice(1, 2);
console.log(arr); //  a, d
// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // đảo ngược arr và thay đổi arr ban đầu
console.log(arr2);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // nối 2 arr với nhau và không thay đổi arr ban đầu
console.log([...arr, ...arr2]);
// JOIN
console.log(letters.join(" - ")); // chuyển đổi arr thành str
