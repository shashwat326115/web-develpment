function one(){
    const username ="hitesh"

    function two(){
        const website="youtube"
       console.log(username);
    }
    //console.log(website);
    two()
    
}
one()

// ***********interesting***********************
// function addone(num){
//     return num+1
// }
// addone(5333)

// const addTwo = function(num)
// {
//     return num+2// these type of function are recognisde as expression
// }
// addTwo(5)
//

// ************arrow********************************
const user = {
    username: "hitesh",
    age:24,
    price: 445,
    welcomeMessage : function(){
        console.log(`this ${this.username} is my new instructr`)
    }
}

const chai = ()=> {
    let username = "hitesh"
    console.log(this);
}

chai()

