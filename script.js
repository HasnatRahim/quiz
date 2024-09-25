const questions = [
    {
        question: "What Is This Quiz For?",
        options: [
            "Educational Purpose",
            "For Fun",
            "Time Pass",
            "All of the Above"
        ],
        answer: "All of the Above"
    },
    {
        question: "Who is the developer of this Quiz?",
        options: [
            "Sheikh Hasina",
            "Prince Mamun",
            "Hasnat",
            "Hero Alam"
        ],
        answer: "Prince Mamun"
    },
    {
        question: "How do you identify?",
        options: [
            "Men",
            "Women",
            "Sharif",
            "Sharifa"
        ],
        answer: "Men"
    },
    {
        question: "What should be the primary focus of a student?",
        options: [
            "Playing Pubg till 3am",
            "Getting Tuition",
            "Support Chatroligue",
            "DIE"
        ],
        answer: "Getting Tuition"
    }
];

let score = 0;

// Function to check answers
function checkAnswers() {
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index + 1}_option"]:checked`);
        if (selectedOption && selectedOption.nextSibling.nodeValue.trim() === q.answer) {
            score++;
        }
    });
    displayResult();
}

// Function to display results
function displayResult() {
    const container = document.querySelector('.container');
    container.innerHTML = `<h2 class="text-center text-lg">You scored ${score} out of ${questions.length}!</h2>`;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', checkAnswers);
