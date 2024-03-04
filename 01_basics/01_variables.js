//node is environment variable to run js which was initially only available on browser(node deno ryan dahl) 
//i.e add script into index and then run script.js
// node - v 
//vscode and jetbrains fleet are the application to run

const accountId = 123566
let accountEmail = "gautam@google.com"
var password = "345322" // deprecated
accountCity= "Lucknow" // not best practice

console.log(typeof accountId)

//************************************************************
let accountState; //undefined by default
//************************************************************


// accountId = 543313                   (const cannot be changed)
accountEmail = "abc@xyz.com"
password  = 92828
accountCity = "Delhi"
console.log(accountId);
console.table([accountId,accountEmail,password,accountCity,accountState]) //instead of writing console log 
// repeateadly use table and square brackets to o/p all together as table of index and values


/*
Prefer not to use var
because of issue in block scope and functional scope
*/