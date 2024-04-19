//Efficient Integer Conversion
//Create a function called, that accepts a positive integer and converts it into 1 in the most effective way possible. The function should return the number of steps executed. You can use only these three possible operations to convert the integer into 1:
//1. Add One
//2. Remove One
//3. Divide by 2 (only if the current amount is even)
//For example:
//solution(4) # Should return 2 (using 2 steps to convert 4 into 1): 4 -> 2 -> 1
//solution(15) # Should return 5 (using 5 steps to convert 15 into 1): 15 -> 16 -> 8 -> 4 -> 2 -> 1
//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function solution(num) {
    let steps = 0;

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else if (num === 3 || num % 4 === 1) {
            num--;
        } else {
            num++;
        }
        steps++;
    }

    return steps;
}

console.log(solution(4)); 
console.log(solution(15));
