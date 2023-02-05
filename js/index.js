var colors = document.getElementsByClassName('Color');
var bodytag = document.getElementById('body');

function ChangeColor(){
    document.addEventListener('click',function(event){
        var coloruser = document.getElementById(`${event.target.id}`);
        for(var i of colors){
            if(i == coloruser){
                var elementstyle = window.getComputedStyle(coloruser);
                var elementcolor = elementstyle.getPropertyValue('background-color');
                bodytag.style.backgroundColor = `${elementcolor}`;       
            }
        }
    })   
}

let firstclick = true;
let clickButton = document.getElementById('Time_Pomodoro');
var time = document.getElementById('Time_Pomodoro');
var minutes = document.getElementById('Minutes');
var seconds = document.getElementById('Seconds');
var counterPomodoro = document.getElementById('CounterPomodoro');
var counterBreak = document.getElementById('CounterBreak');
var IconPause = document.getElementById('PauseIcon');
var click = 0;
var intervalminutes;
var intervalseconds;

var secondsvarpomodoro = 59;
var minutesvarpomodoro = 23;
var secondsvarbreak = 59;
var minutesvarbreak = 4;

var counterpomodorovar = 0;
var counterbreakvar = 0;

var estaenbreak = false;
var estaenpomodoro = false;
function Break(){
    estaenbreak = true;
        if(counterpomodorovar == 4){
            minutesvarbreak = 20;
        }
        time.style.opacity = "1";
        time.style.backgroundColor = "transparent";
        IconPause.style.display = "none";

        intervalseconds = setInterval(function(){

            if(secondsvarbreak < 10){
                seconds.textContent = "0" + secondsvarbreak--;
            } else {
                seconds.textContent = secondsvarbreak--;
            }


            if(secondsvarbreak < "00" && minutesvarbreak <= "00"){
                clearInterval(intervalseconds);
                counterbreakvar++;
                counterBreak.textContent = counterbreakvar;
                if(counterpomodorovar == 4 && counterbreakvar == 4){
                    counterbreakvar = 0;
                    counterBreak.textContent = counterbreakvar;
                    counterpomodorovar = 0;
                    counterPomodoro.textContent = counterpomodorovar;
                }
                estaenbreak = false;
                Pomodoro();
            }

            if(secondsvarbreak < "00"){

                secondsvarbreak = 59;

                if(minutesvarbreak < 10){

                    minutes.textContent = "0" + minutesvarbreak--;

                }
                if(minutesvarbreak <= "00"){

                    minutes.textContent = "00";

                }else {
                    minutes.textContent = minutesvarbreak--;
                }

            }


        },1000)

}


function Pomodoro(){
    estaenpomodoro = true;
    if(click == 1 || estaenpomodoro == true){


        time.style.opacity = "1";
        time.style.backgroundColor = "transparent";
        IconPause.style.display = "none";

        intervalseconds = setInterval(function(){
            if(secondsvarpomodoro < 10){
                seconds.textContent = "0" + secondsvarpomodoro--;
            } else {
                seconds.textContent = secondsvarpomodoro--;
            }

            if(secondsvarpomodoro < "00" && minutesvarpomodoro <= "00"){
                clearInterval(intervalseconds);
                counterpomodorovar++;
                counterPomodoro.textContent = counterpomodorovar;
                estaenpomodoro = false;
                Break();
            } 
            if(secondsvarpomodoro < "00"){

                secondsvarpomodoro = 59;

                if(minutesvarpomodoro < 10){

                    minutes.textContent = "0" + minutesvarpomodoro--;

                }
                if(minutesvarpomodoro <= "00"){

                    minutes.textContent = "00";

                }else {
                    minutes.textContent = minutesvarpomodoro--;
                }

            }
        },1000)
    }
}
function Pause(){
    clearInterval(intervalseconds);
    click = 0;
    IconPause.style.display = "flex";
    time.style.opacity = "0.3";
    time.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
}


clickButton.addEventListener("click", function() {
    click++;
  if (firstclick) {
    // Este es el primer clic en el botón
        Pomodoro();
        firstclick = false;
    // Aquí va el código que quieres ejecutar en el primer clic
  } else if(click == 1) {
    // Este no es el primer clic en el botón
    // Aquí va el código que quieres ejecutar en los clics subsiguientes
    if(estaenpomodoro == true){
        Pomodoro();
    } else if(estaenbreak == true){
        Break();
    } 
  } else if (click == 2){
    Pause();
  }
});
