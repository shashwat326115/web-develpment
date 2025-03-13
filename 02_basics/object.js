// singleton 
// object literals 
const mysym = Symbol("key1")
const Jsuser ={
    name : "name",
    age : 20,
    [mysym]:"key1",
    location: "mumbai",
    email: "hitesh@google.com",
    isLoggedIN: false
}
// console.log(Jsuser.location)
// console.log(Jsuser["location"]);
// console.log(Jsuser[mysym])
//Object.freeze(Jsuser) // make value sort of private
//  

