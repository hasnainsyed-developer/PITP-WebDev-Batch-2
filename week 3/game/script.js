// --- JAVASCRIPT LOGIC ---

// 1. create an array of possible answer (classic +fun/sarcastic)
const answers = [
    "It is certain.",
    "Yes definitely.",
    "Chances are good.",
    "Signs point to yes.",
    "My sources say no.",
    "Chances are not so good.",
    "Very doubtful.",
    "404 Error : Fate not found.",
    "Only if you do alittle dance first.",
    "You are aabout die!", 
    "The stars say... meh.",
    "Askyour dog,they know better.",
    "Comuter says no.",
    "I'm on a coffrr break, ask late.",
    "Yes but you won't like the  consequences.",
    "You need to consult a doctor.",
    "Ypu wifi connection to dstiny is is weak.",
    "Fate is currently stuck.",
    "Chances are great...for someone else"
]

//2. select the important HTML elements
const getAnswerbutton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");

//3. the function runs on click
function showRandomAnswer () {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const RandomAnswer = answers[randomIndex];
    answerDisplay.textContent = RandomAnswer; 
} 
//4. We use the variable 'getAnswerbutton we defined above.
getAnswerbutton.addEventListener("click", showRandomAnswer); 
