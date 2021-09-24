
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var pressed = true;  
var total_time = 63;
var sec;
var min;

// the total amount of time for the test
function countDown(){
    var clock = setInterval(function(){
        
        min  = Math.floor(parseInt(total_time)/60);
        sec = Math.abs(parseInt(total_time) - 60);
    
        if (min < 10) {
            min = '0' + min; 
        }
    
        if (sec < 10) {
            sec = '0' + sec;
        }

        if (total_time > 0) {
            // console.log(min);
            // console.log(sec);
            timer.innerHTML = min + ':' + sec;
            total_time -= 1;
            console.log(total_time);
        }
        if (sec < 0) {
            clearInterval(clock);
        }
    }, 1000);
}
;
   
start_button.addEventListener('click', countDown);


