// date is a object which determine time
//*************************************************** Date*/
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// // console.log(typeof myDate);//object as a data type
let myCreate = new Date(2023,0,23,5,3,34,3)
// console.log(myCreate.toDateString())
// console.log(myCreate.toString())
// let myCreate1 = new Date("03-13-2025")
// console.log(myCreate1.toLocaleString());


//**********time stamp */

// let timess = Date.now();
// console.log(timess);
// console.log(myCreate.getTime())// we are getting time in millisecond


let newD = new Date()
console.log(newD)
console.log(newD.getMonth()+1)
console.log(newD.getDay())


newD.toLocaleString('default',{weekday: "long"})
// here we are customizing to LocaleString
