
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var pressed = true;  
var total_time = 90;
var sec;
var min;

// this is a timer that counts down from 90 
function countDown(){
    start_button.remove();
    var clock = setInterval(function(){
        min  = Math.floor((total_time)/60);
        
        if ((total_time - 60) < 0) {
            sec = parseInt(total_time - 60) + 60;
        } else {
        sec = total_time - 60;
        }

        if (min < 10) {
            min = '0' + min; 
        }
    
        if (sec < 10) {
            sec = '0' + sec;
        }

        if (total_time >= 0) {
            timer.innerHTML = min + ':' + sec;
            total_time -= 1;
        }
        if (sec < 0) {
            clearInterval(clock);
            document.getElementById('start').disabled = true;
        }
    }, 1000)
    ;
}
;
   
start_button.addEventListener('click', countDown);

