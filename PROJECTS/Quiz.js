const restartBtn=document.getElementById('restart');
const pervBtn= document.getElementById('prev');
const nextBtn= document.getElementById('next');
const submitBtn= document.getElementById('submit');
const trueBtn= document.getElementById('true');
const falseBtn= document.getElementById('false');
const usercore= document.getElementById('user_score');
const questionText= document.getElementById('question_text');

let currentQues=0;
var score=0;
let questions=[
    {
        question: "Is Coding Ninjas the best online learning platform",
        answer:[
            {
                option: "For Sure!",answer:true
            },
            {option: "NO, not at all",answer: false},
        ]
    },
    {
        question: "What is better if you wish to achieve success",
        answer:[
            {option: "Smart work",answer:true },
            {option: "Hard work",answer: false},
        ]
    },
    {
        question: "Complete the phrase: Time and ______ wait foe none",
        answer:[
            {option: "Tide",answer:true },
            {option: "Batman",answer: false},
        ]
    },

    restartBtn.addEventListener('click',restart),
    pervBtn.addEventListener('click',prev),
    nextBtn.addEventListener('click',next),
    submitBtn.addEventListener('click',submit),
]

function beginQuiz(){
    currentQuestion=0;
    questionText.innerHTML= questions[currentQues].question;
    trueBtn.innerHTML= questions[currentQues].answer[0].option;
    trueBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQues].answer[1].option;
    falseBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    pervBtn.classList.add('hide');
}

beginQuiz();

function restart(){
    currentQuestion = 0;
    pervBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score=0;
    usercore.innerHTML= score;
    beginQuiz();
}
 function next();{
     currentQuestion++;
     if(currentQuestion>=2){
         nextBtn.classList.add('hide');
          pervBtn.classList.remove('hide');
     }
     questionText.innerHTML= questions[currentQues].question;
    trueBtn.innerHTML= questions[currentQues].answer[0].option;
    trueBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQues].answer[1].option;
    falseBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.remove('hide');
    
 }

 function prev(){
     currentQuestion--;
     if(currentQuestion<=0){
         pervBtn.classList.add('hide');
         nextBtn.classList.remove('hide');
     }
     questionText.innerHTML= question[currentQuestion].question;
     trueBtn.innerHTML= questions[currentQuestion].answer[0].option;
     trueBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQues].answer[1].option;
    falseBtn.onclick=()=>{
        let ano=0;
        if(qustion[currentQues].answer[ano].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    nextBtn.classList.remove('hide');
 }
 function submit(){
     prevBtn.classList.add('hide');
     nextBtn.classList.add('hide');
     submitBtn.classList.add('hide');
     trueBtn.classList.add('hide');
     falseBtn.classList.add('hide');
     questionText.innerHTML="Congratulation on Submitting the quiz";
 }
