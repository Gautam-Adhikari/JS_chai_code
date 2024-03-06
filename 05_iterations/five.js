const coding = ["js","ruby","python","java","cpp"]
//for each is parameter of loop injected by default  (for arrays) //higher order function

// coding.forEach( function (item){                 //function with no name rest same and any iterator in ()
//     console.log(item)                            //call back function
// } )

// coding.forEach( (item,index)=>{
//     console.log(index)
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);                //give only reference DO NOT CALL THE FUNCTION

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {  
        languageName: "javascript",
        languageFileName: "js"
    },
    {  
        languageName: "java",
        languageFileName: "java"
    },
    {  
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
} )