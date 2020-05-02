/**Day 2: Palindrome

A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam

Task:

Write a function that checks is a given string matches its reverse Input: The string to be checked.

Example:

myFunction('Howdy')

Output:

A boolean value.

Example:

myFunction('Howdy')===false

myFunction('madam')===true*/


//creating  a function and making the variable string a parameter
function palindrome (string) {
    var regExp = /[\W_]/g; //This is a regular expression. The expreesion in the var regExp is symbol for non alphanumerics and hyphen.
    var newString = string.toLowerCase().replace(regExp, ''); //The input parameter is set to lower case and all non alphanumerics are replaced with an empty string
    var reversedString = newString.split('').reverse().join(''); // The new string is split into an array, reversed and joined back into a string
    if (reversedString === newString) { //if the reversed and new string are equal, the code below runs accordingly
        return true;
    } 
    else {
        return false 
    } 
}


//Code Test
console.log(palindrome('A nut for a jar of tuna.'))

console.log(palindrome ('Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned'))


console.log(palindrome('Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.'))