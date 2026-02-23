const questions = [
    { text: "Standing in a doorway is the safest place during an earthquake.", answer: "Myth" },
    { text: "Drop, Cover, and Hold On is the recommended safety action during shaking.", answer: "Fact" },
    { text: "Small earthquakes mean a big one is definitely coming soon.", answer: "Myth" },
    { text: "Earthquakes can happen at any time of the year.", answer: "Fact" },
    { text: "Running outside during shaking is safer than staying indoors.", answer: "Myth" },
    { text: "Heavy furniture should be secured to walls to reduce injuries.", answer: "Fact" },
    { text: "The ground always splits open during an earthquake.", answer: "Myth" },
    { text: "Aftershocks can occur after the main earthquake.", answer: "Fact" },
    { text: "Animals can accurately predict earthquakes every time.", answer: "Myth" },
    { text: "If you are outside, you should move away from buildings and power lines.", answer: "Fact" },
    { text: "Earthquakes only happen in countries near volcanoes.", answer: "Myth" },
    { text: "Elevators should not be used during or after an earthquake.", answer: "Fact" },
    { text: "You should light a match immediately after an earthquake.", answer: "Myth" },
    { text: "Preparing an emergency kit can reduce disaster impact.", answer: "Fact" },
    { text: "Modern buildings are designed to reduce earthquake damage.", answer: "Fact" }
];

let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("statement");

        div.innerHTML = `
            <p><strong>${index + 1}.</strong> ${q.text}</p>
            <div class="buttons">
                <button class="myth-btn" onclick="checkAnswer(${index}, 'Myth', this)">Myth</button>
                <button class="fact-btn" onclick="checkAnswer(${index}, 'Fact', this)">Fact</button>
            </div>
            <div class="feedback" id="feedback-${index}"></div>
        `;

        quizContainer.appendChild(div);
    });
}

function checkAnswer(index, selected, button) {
    const feedback = document.getElementById(`feedback-${index}`);
    const correctAnswer = questions[index].answer;

    const buttons = button.parentElement.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "#2ecc71";
        score++;
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        feedback.style.color = "#e74c3c";
    }

    document.getElementById("score").textContent = score;
}

function restartQuiz() {
    score = 0;
    document.getElementById("score").textContent = score;
    loadQuiz();
}

loadQuiz();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});

function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const percentage = Math.round((checked / total) * 100);

    progressFill.style.width = percentage + "%";
    progressText.textContent = percentage + "%";
}

function resetChecklist() {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    updateProgress();
}
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    successMessage.textContent = "Message sent successfully! Stay safe.";
    form.reset();
});