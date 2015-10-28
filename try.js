var arr=[1,2,3,4,5,6];
Array.prototype.slice.call(arr,1);
console.log(Array.prototype.slice.call(arr,1));
console.log(arr.slice(1));
arr.func=Array.prototype.slice;
console.log(arr.func(1));
delete arr.func;