const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       //current context(values)
        console.log(this);
    }

}

//no this in arrow function allowed

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()    //sam, welcome to website       //use of this

// console.log(this);       //{} => in node  // in console => window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);          //undefined //not in function only object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);          //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);                  //{}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2          //implicit return (mein maan leta hu mat likho return)

// const addTwo = (num1, num2) => ( num1 + num2 )       // {} return likho Aur () return mat likho

const addTwo = (num1, num2) => ({username: "hitesh"})           


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()