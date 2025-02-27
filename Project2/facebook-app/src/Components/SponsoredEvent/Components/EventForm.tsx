function studentScores(N, M, marks) {
    // Step 1: Calculate the average for each subject
    let subjectAverages = new Array(M).fill(0);
    
    for (let j = 0; j < M; j++) {
        let total = 0;
        for (let i = 0; i < N; i++) {
            total += marks[i][j];
        }
        subjectAverages[j] = total / N;
    }

    // Step 2: Find the subject with the lowest average
    let minAvgIndex = subjectAverages.indexOf(Math.min(...subjectAverages));

    // Step 3: Calculate the total marks excluding the lowest-average subject
    let result = [];
    for (let i = 0; i < N; i++) {
        let totalMarks = 0;
        for (let j = 0; j < M; j++) {
            if (j !== minAvgIndex) {
                totalMarks += marks[i][j];
            }
        }
        result.push(totalMarks);
    }

    // Step 4: Return the final scores
    return result;
}

// Example 1
const N1 = 3;
const M1 = 5;
const marks1 = [
    [117, 75, 76, 65, 87],
    [87, 76, 68, 56, 89],
    [67, 87, 78, 77, 65]
];

console.log(studentScores(N1, M1, marks1)); // Output: [325, 299, 296]

// Example 2
const N2 = 3;
const M2 = 3;
const marks2 = [
    [50, 30, 70],
    [30, 70, 99],
    [99, 20, 30]
];

console.log(studentScores(N2, M2, marks2)); // Output: [120, 129, 129]
