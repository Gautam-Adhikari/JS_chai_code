const myArr = [0,1,2,3,true,"Gautam"];
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1])

//array create shallow copies on copy operations(i.e same reference points)
//methods
myArr.push(7)
console.log(myArr)
myArr.pop()
myArr.unshift(10) //not appreciated to use
console.log(myArr)
myArr.shift() 
console.log(myArr)
console.log(myArr.includes(10)) //return boolean
console.log(myArr.indexOf(3)) //return -1 if not else its index

const newArr = myArr.join()
console.log(newArr) //typeof to string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);