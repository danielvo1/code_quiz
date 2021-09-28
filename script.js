
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var total_time = 90;
var sec;
var min;

//array of questions and corresponding selections 
var questions = [
    "What does HTML stand for?", 
    "What is CSS mainly used for?",
    "What is my dog's name ?" 
];

console.log(questions);
//answer key
var answerKey = [
    "Hypertext Markup Language" , 
    "Styling", 
    "Gigi"
];

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

console.log(selections);

// function starts the quiz
function startQuiz() {
    countDown();
    createBtn();

}


function createBtn () {
    var button = document.createElement('button');
    button.innerHTML = "Next";
    document.body.appendChild(button);
}

function quiz(){

}




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
            timer.innerHTML = "00:00"
        }
    }, 1000)
    ;
}
;



start_button.addEventListener('click', startQuiz);

