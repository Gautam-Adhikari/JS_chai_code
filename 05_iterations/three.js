// for of
//array specific loops
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps//similar to object only that no duplicate values and unique values with order maintained

const map = new Map()
map.set("IN", "India")      //key value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // not considered (unique value)

for (const [key, value] of map) {       //map destructure
    console.log(key, ':-', value);
}

const object = {
    game1 : 'NFS',
    game2 : 'FIFA'
}

for(const [key,value] of object){
    console.log(key, ':-' , value);             //not iterable
}


