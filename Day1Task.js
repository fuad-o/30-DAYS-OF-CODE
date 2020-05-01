/*Divisors Write a function that takes in an integer as a parameter and returns the number of 
possible divisors the number including 1 and but excluding itself. 
Example: myFunction(10)===3; //10 is divisible by 1,2,5*/


//declaration of variables and arrays in the global scopes
let int;
let division = [];


function myFunction (int) {

    if (Number.isInteger(int) === true) {
        console.log(true) ;
        //Ensure that only integer values can be passed in
    }
    
    else { 
        return 'Error'
        //Ensure that only integer values can be passed in, else input is returned
    }

    for (let counter = 1; counter < int; counter++) {
        //counter is set less than int based on instructions.
        if (int % counter === 0) {
            console.log( `${int} is divisible by ${counter}`)
           division.push(counter)
           
        }
        
    }
    
    return `${int} is divisible by ${division.length} digits with 0 remainder.`


}

console.log(myFunction(35.7))



