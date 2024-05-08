const quizForm = document.querySelector('.quiz-form')
const submitBtn= document.querySelector('#submit-btn')
const outputEl= document.querySelector('#output')

const correctAnswers = ["90°","right-angled"]

 function calculateScore() 
{
    let index = 0 ;
    let score = 0;
    const formResults = new FormData(quizForm); // here we used formdata API
    for(let value of formResults.values())         //entries and values are two main functions
    {
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputEl.innerText = "Your score is : " + score ;
}


submitBtn.addEventListener("click", calculateScore)