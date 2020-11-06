//none of the buttons in your index.html file have an ID, hence JS is unable to get any of these
const restartBtn=document.getElementById('restart');
const prevBtn= document.getElementById('prev'); //not perv button, prev button
const nextBtn= document.getElementById('next');
const submitBtn= document.getElementById('submit');
const trueBtn= document.getElementById('true');
const falseBtn= document.getElementById('false');
const userscore= document.getElementById('user-score'); //not usercore, userscore
//the correct name of the ID is user-score not user_score
const questionText= document.getElementById('question-text');
//the correct name of the ID is question-text not question_text
//you did not add question-text ID in your index.html file 

let currentQuestion=0; //making it currentQuestion
var score=0;
let questions=[
    {
        question: "Is Coding Ninjas the best online learning platform",
        answer:[ 
            {
                option: "For Sure!",answer:true
            },
            {option: "NO, not at all",answer: false} //removed comma
        ]
    },
    {
        question: "What is better if you wish to achieve success",
        answer:[
            {option: "Smart work",answer:true },
            {option: "Hard work",answer: false} //removed comma 
        ]
    },
    {
        question: "Complete the phrase: Time and ______ wait foe none",
        answer:[
            {option: "Tide",answer:true },
            {option: "Batman",answer: false} //removed comma 
        ]
    }
]

//you added your events inside the question array
//declaring events outside the question array
    restartBtn.addEventListener('click',restart);
    prevBtn.addEventListener('click',prev); //not pervBtn, prevBtn
    nextBtn.addEventListener('click',next);
    submitBtn.addEventListener('click',submit);


function beginQuiz(){
    currentQuestion=0;
    questionText.innerHTML= questions[currentQuestion].question;
    //major mistakes, your variable is "currentQuestion" and you're accessing your array with "currentQues"
    trueBtn.innerHTML= questions[currentQuestion].answer[0].option; //same currentQues
    trueBtn.onclick=()=>{
        let ano=0;
        if(questions[currentQuestion].answer[ano].answer){ //name of the array is questions not qustion
            //accessing array with currentQues issue
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML= score; //you have declared your userScore as "userscore" on line 7, now you are using a variable userScore that doesn't exist
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQuestion].answer[1].option; //currentQues
    falseBtn.onclick=()=>{
        let ano=1; //understand what you are doing here, when you are giving ano=0 for the falseBtn, you are basically saying no matter which option gets selected, first or the second, the score will be incremented
        //here ano has to be 1 so that when answer[ano] is accessed on line 57, it checks if the first option is correct and when answer[ano] is accessed on line 72, it checks if the second option is correct
        //declaring ano=1 here
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
    prevBtn.classList.add('hide'); //not pervBtn, prevBtn
}

beginQuiz();

function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide'); //prevBtn
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score=0;
    userscore.innerHTML= score; //userscore
    beginQuiz();
}
//look at the declaration of the function, you added a semicolon between () and {
//removing that 
 function next(){
     currentQuestion++;
     if(currentQuestion>=2){
         nextBtn.classList.add('hide');
          prevBtn.classList.remove('hide'); //prevBtn
     }
     questionText.innerHTML= questions[currentQuestion].question; //currentQuestion
    trueBtn.innerHTML= questions[currentQuestion].answer[0].option; //currentQuestion
    trueBtn.onclick=()=>{
        let ano=0;
        if(questions[currentQuestion].answer[ano].answer){ //name of the array is questions and currentQuestion issue
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML= score; //declaration of variable as userscore and then using it here as userScore won't work
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQuestion].answer[1].option; //currentQuestion
    falseBtn.onclick=()=>{
        let ano=1; //understand what you are doing here, when you are giving ano=0 for the falseBtn, you are basically saying no matter which option gets selected, first or the second, the score will be incremented
        //here ano has to be 1 so that when answer[ano] is accessed on line 57, it checks if the first option is correct and when answer[ano] is accessed on line 72, it checks if the second option is correct
        //declaring ano=1 here
        if(questions[currentQuestion].answer[ano].answer){ //questions array, currentQuestion
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML= score; //userscore not userScore
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.remove('hide');
    
 }

 function prev(){
     currentQuestion--;
     if(currentQuestion<=0){
         prevBtn.classList.add('hide'); //prevBtn
         nextBtn.classList.remove('hide');
     }
     questionText.innerHTML= questions[currentQuestion].question; //name of the array is questions
     trueBtn.innerHTML= questions[currentQuestion].answer[0].option;
     trueBtn.onclick=()=>{
        let ano=0;
        
        if(questions[currentQuestion].answer[ano].answer){ //questions, currentQuestion
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML= score; //userscore
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML= questions[currentQuestion].answer[1].option; //currentQuestion
    falseBtn.onclick=()=>{
        let ano=1; //understand what you are doing here, when you are giving ano=0 for the falseBtn, you are basically saying no matter which option gets selected, first or the second, the score will be incremented
        //here ano has to be 1 so that when answer[ano] is accessed on line 57, it checks if the first option is correct and when answer[ano] is accessed on line 72, it checks if the second option is correct
        //declaring ano=1 here
 
        if(questions[currentQuestion].answer[ano].answer){ //questions, currentQuestion
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML= score; //userscore
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
