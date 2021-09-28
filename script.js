
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var timer = document.querySelector("#timer");
var nextBtn = document.createElement('button');
var br4 = document.createElement('br');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var instructions = document.querySelector('#instructions');

var ques = document.createElement('form');
ques.setAttribute('id', 'question');
var scoreboard = document.createElement('form');
scoreboard.setAttribute('id' , 'scoreboard');

//creates 'a' choice
var a = document.createElement('input');
a.setAttribute('type', 'radio');
a.setAttribute('id', 'a');
a.setAttribute('name', 'select');
var a_content = document.createElement('label');
a_content.setAttribute('for', 'a');

//creates 'b' choice
var b = document.createElement('input');
b.setAttribute('type', 'radio');
b.setAttribute('id', 'b');
b.setAttribute('name', 'select');
var b_content = document.createElement('label');
b_content.setAttribute('for', 'b')

//creates 'c' choice
var c = document.createElement('input');
c.setAttribute('type', 'radio');
c.setAttribute('id', 'c');
c.setAttribute('name', 'select');
var c_content = document.createElement('label');
c_content.setAttribute('for', 'c');

//creates 'd' choice
var d = document.createElement('input');
d.setAttribute('type', 'radio');
d.setAttribute('id', 'd');
d.setAttribute('name', 'select')
var d_content = document.createElement('label');
d_content.setAttribute('for', 'd');

//variables used in different functions
var user_answer = '';
var total_time = 60;
var counter = 0;
var cur_selection;
var sec;
var min;
var correct_counter = 0;



//array of questions 
var questions = [
    "What does HTML stand for?", 
    "What is CSS mainly used for?",
    "What is my dog's name ?" 
];

//answer key
var answerKey = [
    "Hypertext Markup Language" , 
    "Styling", 
    "Gigi"
];

//array of selection
var selections = [
    {a: "Hypertext Markup Language" ,
    b: "Hyperactive Markup Language" ,
    c: "Hotdogs Mustard Lard" ,
    d: "Hypertext Makeup Language" }, 

   {a:"Creating Scripts" ,
    b: "Styling",
    c: "Main structure" ,
    d: "Its not used" },

   {a: "Spike" , 
    b:  "Gigi" , 
    c: "Kyrie" ,
    d: "Billy" }
]


// function starts the quiz
function startQuiz() {
    countDown();
    createBtn();
    createQuiz();
    instructions.remove();
}

//creates the button that allows test taker to submit their answer
function createBtn () {
    nextBtn.setAttribute("id", "nextBtn");
    nextBtn.innerHTML = "Next";
    document.body.appendChild(nextBtn);
}


//puts the questions and answers on screen
function createQuiz(){
    if (counter < questions.length) {

        ques.textContent = questions[counter];

        // this is assaigning the choices with values
       quizContent();
    }
}

//switches to next question
function next() {
    //assigns the content to the slections
    if (a.checked) {
        user_answer = a_content.textContent;
    } else if (b.checked) {
        user_answer = b_content.textContent;
    } else if (c.checked) {
        user_answer = c_content.textContent;
    } else if (d.checked) {
        user_answer = d_content.textContent;
    }

    //alerts if its correct or incorrect and takes away 10 second for incorrect answer
    if(answerKey.includes(user_answer)) {
        alert('correct');
        correct_counter ++;
    }
    if(!answerKey.includes(user_answer)) {
        alert('incorrect, you lost 10 seconds');
        total_time -= 10;
    }


    ques.innerHTML = questions[counter];
    if (counter == questions.length){
        console.log('ji');
        total_time = 0;
        return stop();
    } else {
    quizContent();
}
}

    function quizContent() {
    a_content.innerHTML =  selections[counter].a;
    b_content.innerHTML = selections[counter].b;
    c_content.innerHTML = selections[counter].c;
    d_content.innerHTML = selections[counter].d;

    document.querySelector('#content').appendChild(ques);
    document.querySelector('#question').appendChild(br1);
    document.querySelector('#question').appendChild(a);
    document.querySelector('#question').appendChild(a_content);
    document.querySelector('#question').appendChild(br2);
    document.querySelector('#question').appendChild(b);
    document.querySelector('#question').appendChild(b_content);
    document.querySelector('#question').appendChild(br3);
    document.querySelector('#question').appendChild(c);
    document.querySelector('#question').appendChild(c_content);
    document.querySelector('#question').appendChild(br4);
    document.querySelector('#question').appendChild(d);
    document.querySelector('#question').appendChild(d_content);
    


    counter++;

    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;
}


function stop(){
    console.log('stop');
    ques.remove();
}

// funtion inputScore (){

// }


// this is a timer that counts down from total time and formats it like "00:00" 
function countDown(){
    start_button.remove();
    var clock = setInterval(function(){
        min  = Math.floor((total_time)/60);
        if ((total_time - 60) < 0) {
            sec = total_time;
        } else {
            sec = total_time - 60;
        }

        if (min < 10) {
            min = '0' + min; 
        }
    
        if (sec < 10) {
            sec = '0' + sec;
        }

        if (total_time > 0) {
            total_time -= 1;
            timer.innerHTML = min + ':' + sec;
        
        } else if (total_time == 0) {
            clearInterval(clock);
            timer.innerHTML = "00:00";
            alert("The quiz is over!");
        }
    }, 1000)
    ;
}
;

start_button.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', next);