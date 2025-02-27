// function SearchLetter(X, Y) {
//     let first = -1, last = -1;
//     let distinctChars = new Set();

//     // Find the first and last occurrence of Y
//     for (let i = 0; i < X.length; i++) {
//         if (X[i] === Y) {
//             if (first === -1) first = i;
//             last = i;
//         }
//     }

//     // If Y occurs less than twice, return -1
//     if (first === -1 || first === last) return -1;

//     // Count distinct characters between first and last occurrence
//     for (let i = first + 1; i < last; i++) {
//         if (X[i] !== ' ' && X[i] !== Y) {
//             distinctChars.add(X[i]);
//         }
//     }

//     return distinctChars.size;
// }

// // Example usage:
// const input1 = "my name is granar";
// const input2 = 'a';

// console.log(SearchLetter(input1, input2)); // Expected Output: 7









function SearchLetter(input1, input2) {
    let first = -1, last = -1;
    let distinctChars = new Set();

    // Find first and last occurrence of input2 in input1
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] === input2) {
            if (first === -1) first = i;
            last = i;
        }
    }

    // If input2 appears less than twice, return -1
    if (first === -1 || first === last) return -1;

    // Count distinct characters between first and last occurrence
    for (let i = first + 1; i < last; i++) {
        if (input1[i] !== ' ' && input1[i] !== input2) {
            distinctChars.add(input1[i]);
        }
    }

    return distinctChars.size;
}

// Example usage
const input1 = "my name is granar";
const input2 = 'a';

console.log(SearchLetter(input1, input2)); // Expected Output: 7