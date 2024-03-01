//can be declared using literals and also constructors
//singleton (these are not formed if objects are formed using literals) else multiple instances
//object.create

//object literals


const mySym = Symbol("key1")

const jsUser = {
    name: "Gautam",
    "full name": "Gautam Adhikari",
    [mySym]: "mykey1",   //in order to access symbols use square brackets
    age: 18,
    location: "Jaipur",
    email: "gautam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} //object created
//console.log(jsUser."full name") //error
console.log(jsUser["full name"]) // cannot use dot operator
console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser[mySym]) // use square bracket //cannot use dot operator 

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //reference to same object or current one hence this keyword
}

console.log(jsUser.greeting()); //use paranthesis if not used then refence to function is returned
console.log(jsUser.greetingTwo());