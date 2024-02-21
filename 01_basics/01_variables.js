//node is environment variable to run js which was initially only available on browser(node deno ryan dahl)
//vscode and jetbrains fleet are the application to run
const accountId = 123566
let accountEmail = "gautam@google.com"
var password = "345322" // deprecated
accountCity= "Lucknow" // not best practice

let accountState; //undefined
// accountId = 543313 const cannot be changes
accountEmail = "abc@xyz.com"
password  = "92828"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId,accountEmail,password,accountCity,accountState])