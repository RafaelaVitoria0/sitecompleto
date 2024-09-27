function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    })
}

function playSound(){
    let clickSound = document.getElementById('selecionarsom');
    clickSound.play();
}

function submitQuiz() {

    let correctAnswers = {
        q1: "A",
        q2: "B",
        q3: "A",
        q4: "B",
        q5: "A",
        q6: "B",
        q7: "B",
        q8: "A",
        q9: "A",
        q10:"B",

    // add as respostas corretas para as outras perguntas

    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value
        if(userAnswer === correctAnswers[key]){
            score++;

        }
    }
     
   let result = document.getElementById('result');
   result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    document.getElementById('reenviar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);

   // tocar som se todas as respostas estiverem corretas
   if(score === 10){
    let successSound = document.getElementById('venceusom');
    successSound.play();
   }
   else{
    let erroSound = document.getElementById('perdeusom');
    erroSound.play();
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

   }

}

function replayQuiz() {
    score = 0;
    document.getElementById('enviar').removeAttribute('disabled');
    document.getElementById('reenviar').setAttribute('disabled', true);
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();
    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 
}