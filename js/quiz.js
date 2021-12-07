//Question bank

let questionBank= [

    {
        question : 'Donde se jugo el mundial de 1994',
        option : ['Estados Unidos','España','Colombia','Japon'],
        answer : 'Estados Unidos'
    },
    {
        question : 'Quien es el maximo goleador historico de los mundiales',
        option : ['Pele','Maradona','Miroslav Klose','Paolo Maldini'],
        answer : 'Miroslav Klose'
    },
    {
        question : 'Cuantos mundiales tiene Italia',
        option : ['5','2','3','4'],
        answer : '4'
    },
    {
        question : 'Seleccion con mas mundiales ganados',
        option : ['Italia','Alemania','Brasil','Portugal'],
        answer : 'Brasil'
    },
    {
        question : 'Donde se jugara el mundial 2022',
        option : ['Qatar','Japon','Arabia Saudita','Portugal'],
        answer : 'Qatar'
    }
  
]



let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;
var usuario;

function inicio(){
    let txtusuario= document.getElementById('usuario');
    usuario = txtusuario.value;
     if(usuario == ''){
        alert("Por favor ingrese su nombre")
        return false;
    }

    var quest = document.getElementById("quest");
    quest.style.display = 'block';

    var  siguiente = document.getElementById("siguiente");
    siguiente.style.display = 'block';

    var  inicio = document.getElementById("inicio");
    inicio.style.display = 'none';
}

//function to display questions
function displayQuestion(){
    
   

    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
      console.log(span[a])
    }
    let txtnombre= document.getElementById('nombre');
    txtnombre.innerHTML = usuario;

    question.innerHTML= 'Pregunta.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
   
   
    
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
