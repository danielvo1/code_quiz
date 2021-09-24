
// intializing global variables to be used in the functions
var start_button = document.querySelector("#start");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var total_time = 90;
// the total amount of time for the test
function countDown(){
    setInterval(function(){ 
        const hour =  Math.floor(total_time/60);
        console.log(hour);
        const min = total_time % 60;
        if (total_time > 0) {
            timer.textContent = hour + ":" + min; 
            total_time -= 1;
        }
    }, 1000);
};

start_button.addEventListener('click', countDown);


