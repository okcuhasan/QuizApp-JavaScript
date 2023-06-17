const quizData = [
    {
        question: "The person who has complete responsibility for the success of the project and have accountability to the Stakeholders and Sponsors.",
        a: "System Analyst",
        b: "End-User",
        c: "Project Leader",
        d: "Project Manager",
        correct: "d",
    },
    {
        question: "A type of Software Life Cycle Activity that involves building the software and converting the design into code.",
        a: "Implementation",
        b: "Interface design",
        c: "Detailed design",
        d: "Architectural design",
        correct: "a",
    },
    {
        question: "A type of Software Life Cycle Activity that involves testing by the original developer.",
        a: "System testing",
        b: "Acceptance testing",
        c: "Unit testing",
        d: "Regression testing",
        correct: "c",
    },
    {
        question: "What are the core values in Extreme Programming?",
        a: "Feedback at many different levels",
        b: "Simplicity in design and code",
        c: "Communication between team members and with the customer",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1997",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hypertext Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
];


const quiz = document.getElementById("quiz"); // quiz container
const answerEls = document.querySelectorAll(".answer"); // radios
const questionEl = document.getElementById("question"); // header
const a_text = document.getElementById("a_text"); // labels
const b_text = document.getElementById("b_text"); // labels
const c_text = document.getElementById("c_text"); // labels
const d_text = document.getElementById("d_text"); // labels
const submitBtn = document.getElementById("submit"); // button

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct)
        score++;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick = "location.reload()">Reload</button>
        `
    }
})


