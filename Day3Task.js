/*Day 3: Local Santa
You have a box of sweets and you want to give them all away to a group of brothers and sisters. If you have enough left in the box to give them each evenly, you share it. If it is not enough, you keep it to yourself. 

Task:
Write a function that takes two integer arguments and determines if you can share the sweets evenly or not.

Input:
The inputs are integer values, the first one represents the number of siblings, and the second one represents the number of sweets  that you have left in the box. Example: Santa(3, 9)

Output:

A string that says 'give away' if you are giving them away, or 'eat them yourself' if you will be eating them yourself. 

Example: 

Santa(3,9)==='give away'

Santa(3,8)==='eat them yourself'*/

function boxOfSweets (noOfSiblings, noOfSweets) {

    //first, we ensure only integers can be passed in as arguments.
    if (Number.isInteger(noOfSiblings) === false) {
        return 'No of siblings: ERROR. Wrong_input :( ';
    }

    else if (Number.isInteger(noOfSweets) === false) {
        return 'No of sweets: ERROR. Wrong_input :(';
}


//Here, we used SWITCH key word to switch between possible cases
let sweetDistribution = noOfSweets >= noOfSiblings;
switch (sweetDistribution) {
   case noOfSweets < noOfSiblings:
       return 'Eat them yourself';
    case noOfSweets >= noOfSiblings:
        if (noOfSweets % noOfSiblings !== 0) {
            return 'Eat them yourself';
        }
        return 'Give away';

        default:
            return 'An Unexpected Error Has Occured. Try Again :)';
            break;
}
}

//Code Test

console.log(boxOfSweets (3,8))
console.log(boxOfSweets (3,9))
console.log(boxOfSweets (3362,5723))
console.log(boxOfSweets (58.7, 183))
