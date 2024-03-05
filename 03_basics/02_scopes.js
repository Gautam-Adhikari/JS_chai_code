//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

//global scope is different for node and inspect console (core scope, block scope,nest scope) 

// console.log(a);
// console.log(b);
// console.log(c);


//closures

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // no error (//6)

function addone(num){
    return num + 1
}



addTwo(5)                   // error (cannot access)    variable is holding value , decalaration
const addTwo = function(num){               // expressions (variable hold functions)
    return num + 2
}                           //hoisting