// Immediately Invoked Function Expressions (IIFE)
// protect from global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; to end with semi-colon 

( (name) => {
    //simple iffe or unamed
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')