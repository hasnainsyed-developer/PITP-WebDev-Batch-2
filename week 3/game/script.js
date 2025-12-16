// --- JAVASCRIPT LOGIC ---

// 1. create an array of possible answers (classic + fun/sarcastic)
const answers = [
    "It is certain.",
    "Yes definitely.",
    "Chances are good.",
    "Signs point to yes.",
    "My sources say no.",
    "Chances are not so good.",


    
    "Very doubtful.",
    "404 Error : Fate not found.",
    "Only if you do a little dance first.",
    "You are about die!", 
    "The stars say... meh.",
    "Ask your dog,they know better.",
    "Computer says no.",
    "I'm on a coffee break, ask later.",
    "Yes but you won't like the consequences.",
    "You need to consult a doctor.",
    "Your wifi connection to destiny is weak.",
    "Fate is currently stuck.",
    "Chances are great...for someone else"
]

//2. select the important HTML elements
const getAnswerButton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");

//3. the function runs on click
function showRandomAnswer () {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer; 
} 
//4. We use the variable 'getAnswerbutton we defined above.
getAnswerButton.addEventListener("click", showRandomAnswer); 
