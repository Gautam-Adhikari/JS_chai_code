const myObj = {
    js : "javascript",
    cpp : 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} is shorthand for ${myObj[key]}`);
}

const programming = ["CPP","JAVA","PYTHON","JAVASCRIPT"]

for (const pro in programming) {
    // console.log(pro);                                   // indexes 0 1 2 3 4
    console.log(programming[pro])
}

const map = new Map()
map.set("IN", "India")      //key value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {                         /not iterable
//     console.log(key);
// }