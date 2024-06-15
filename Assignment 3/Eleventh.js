const students = [
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
];

function calculateAverages(students) {
    return students.map(student => {
        // Get an array of the scores
        const scores = Object.values(student);
        // Calculate the sum of the scores
        const total = scores.reduce((sum, score) => sum + score, 0);
        // Calculate the average score
        const average = total / scores.length;
        // Return an object with the student's average score
        return { average: average };
    });
}

const averages = calculateAverages(students);

console.log(averages);
