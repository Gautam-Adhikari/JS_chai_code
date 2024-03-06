 // const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item                                      //no value is returned
// } )

// console.log(values);

const nums = [0,1,2,3,4,5,6,7,8,9,10]

const newNum = nums.filter( (num)=> (num>4) )               //implicit return and filter returns the value thus store it in new variable
console.log(newNum)


//alternate but little lengthy with condition check 

// const newNums = []           

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let value = books.filter( (bk)=> bk.genre === "History" );

value = books.filter( (bk) => bk.publish>=2000 )

value = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(value)