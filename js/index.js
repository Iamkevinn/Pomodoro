var colors = document.getElementsByClassName('Color');
var bodytag = document.getElementById('body');

function ChangeColor(){
    document.addEventListener('click',function(event){
        var coloruser = document.getElementById(`${event.target.id}`);
        var elementstyle = window.getComputedStyle(coloruser);
        var elementcolor = elementstyle.getPropertyValue('background-color');
        console.log(elementcolor)
        bodytag.style.backgroundColor = `${elementcolor}`;
    })   
}

var time = document.getElementById('Time_Pomodoro');
var minutes = document.getElementById('Minutes');
var seconds = document.getElementById('Seconds');
var counter = document.getElementById('Counter');
var IconPause = document.getElementById('PauseIcon');
var click = 0;
var intervalminutes;
var intervalseconds;
var secondsvar = 59;
var minutesvar = 23;

function User_Click(){

    click++;


    if(click == 1){

        time.style.opacity = "1";
        time.style.backgroundColor = "transparent";
        IconPause.style.display = "none";

        intervalseconds = setInterval(function(){
        
            if(secondsvar < 10){
                seconds.textContent = "0" + secondsvar--;
            } else {
                seconds.textContent = secondsvar--;
            }
            if(secondsvar < "00"){
                secondsvar = 59;
                if(minutesvar < 10){
                    minutes.textContent = "0" + minutesvar--;
                } else {
                    minutes.textContent = minutesvar--;
                }
            }
        },1000)


    } else if(click == 2){
        
        clearInterval(intervalminutes);
        clearInterval(intervalseconds);
        IconPause.style.display = "flex";
        click = 0;
        time.style.opacity = "0.3";
        time.style.backgroundColor = "rgba(255, 255, 255, 0.07)";

    }
}