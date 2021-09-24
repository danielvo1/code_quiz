
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var total_time = 5;
var sec;
var min;

// function starts the quiz
function startQuiz() {

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
            console.log(total_time);
            timer.innerHTML = min + ':' + sec;
        
        } else if (total_time == 0) {
            clearInterval(clock);
            timer.innerHTML = "00:00"
        }
    }, 1000)
    ;
}
;







   
start_button.addEventListener('click', countDown);

