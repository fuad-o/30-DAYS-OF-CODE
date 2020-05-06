/*Day 4: Confused Strings
Task:
Write a function that takes in a single word string mixed with both upper and lower case characters and returns it as a larger string made up of all its characters in upper case and all its characters in lower case separated by a comma and a space. 

Input:

A string. 

Example:

Cstrings("HasTaLAvisTA")

Output:
 

String. 

Example:

Cstrings("HasTaLAvisTA")==="HASTALAVISTA, hastalavista"*/

function myFunction (str) {

    //note: str variable can only take in a word. Therefore, our string should only include alphabets
    var letters = /^[A-Za-z]+$/; //This is a regular eexpression for indicating only alphabets 
    if (str === str.toUpperCase() || str === str.toLowerCase()) {
        return false //This if statement ensures that the string input is neither all LowerCase or all Uppercase but a mix of both cases.
    }
    
   else if(str.match(letters)) //ensure that only alphabets can be passed into the string for the code to run
     {
        return str.toUpperCase() + ', ' + str.toLowerCase()
     }
    else{
        return 'Only alphabets allowed';  
    }
   
}

//Now let's run our code with various examples
console.log(myFunction('hastalavista'))
console.log(myFunction('HASTALIVISTA'))
console.log(myFunction('GUYwueybbfUu'))
console.log(myFunction('dictioNarY'))
console.log(myFunction('YouubE'))


