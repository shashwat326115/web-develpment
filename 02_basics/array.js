//array are resizable can contain  one data types
// 0 indexing && it copy shallow copy i.e changes in its copy can oalso impact its originaal array
const array1 = [0,1,2,3] 
console.log(array1[3]);
const myarr = new Array(1,2,3,4)
console.log(typeof myarr);// giving object **

// array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(10)
// myarr.shift()
// console.log(myarr)//adding or removing elements at 0

//includes(el): give true or false
// indexof(el): if not present return -1;

const newArr =  myarr.join()
console.log(newArr);
console.log(typeof newArr);

// slice,splice
console.log(myarr);
console.log("A ",myarr);
const myn1 = myarr.slice(1,2)
console.log(myarr);
console.log(myn1)
const myn2 = myarr.splice(1,2)
console.log(myarr);
console.log(myn2)// in splice both index are included as well asthey got removed from original array






