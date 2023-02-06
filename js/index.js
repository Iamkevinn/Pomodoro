var colors = document.getElementsByClassName('Color');
var bodytag = document.getElementById('body');
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
var pomodorospan = document.getElementById('PomodoroSpan');
var breakspan = document.getElementById('BreakSpan');

var secondsvarpomodoro = 59;
var minutesvarpomodoro = 24;

var secondsvarbreak = 59;
var minutesvarbreak = 4;

var counterpomodorovar = 0;
var counterbreakvar = 0;

var estaenbreak = false;
var estaenpomodoro = false;
const audio = new Audio('img/notification');
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

function Break(){
    estaenbreak = true;

    if(click == 1 && estaenbreak == true){
        breakspan.style.fontWeight = 'bold';
        pomodorospan.style.fontWeight = '550';
        if(counterpomodorovar == 4 ){
            minutesvarbreak = 19;
        }
        time.style.opacity = "1";
        time.style.backgroundColor = "transparent";
        IconPause.style.display = "none";

        intervalseconds = setInterval(function(){

            seconds.textContent = secondsvarbreak;
            minutes.textContent = minutesvarbreak;

            if(secondsvarbreak <= 0 && minutesvarbreak <= 0){
                minutes.textContent = "0" + `${minutesvarbreak}`;
                seconds.textContent = "0" + `${secondsvarbreak}`;
                clearInterval(intervalseconds);
                audio.play();
                counterbreakvar++;
                counterBreak.textContent = counterbreakvar;
                estaenbreak = false;
                Pomodoro();
                secondsvarbreak = 59;
                minutesvarbreak = 4;
            } else{
                if(secondsvarbreak< 0){
                    secondsvarbreak = 59;
                    minutesvarbreak--;
                }
                if(minutesvarbreak < 10){
                    minutes.textContent = "0" + `${minutesvarbreak}`;
                }else {
                    minutes.textContent = `${minutesvarbreak}`;
                }
                if(secondsvarbreak< 10){
                    seconds.textContent = "0" + `${secondsvarbreak}`;
                } else {
                    seconds.textContent = `${secondsvarbreak}`;
                }
                secondsvarbreak--;
            }

        },1000)
    }
}

var wait;

function Pomodoro(){
    estaenpomodoro = true;

    if(click == 1 && estaenpomodoro == true){

        if(counterbreakvar == 4 && counterpomodorovar == 4){
            wait = setInterval(function() {
                counterbreakvar = 0;
                counterpomodorovar = 0;
                counterBreak.textContent = counterbreakvar;
                counterPomodoro.textContent = counterpomodorovar;
                clearInterval(wait);
            }, 1000);
        }
        breakspan.style.fontWeight = '550';
        pomodorospan.style.fontWeight = 'bold';
        time.style.opacity = "1";
        time.style.backgroundColor = "transparent";
        IconPause.style.display = "none";


        intervalseconds = setInterval(function(){

            seconds.textContent = secondsvarpomodoro;
            minutes.textContent = minutesvarpomodoro;

            if(secondsvarpomodoro <= 0 && minutesvarpomodoro <= 0){
                minutes.textContent = "0" + `${minutesvarpomodoro}`;
                seconds.textContent = "0" + `${secondsvarpomodoro}`;
                clearInterval(intervalseconds);
                audio.play();
                counterpomodorovar++;
                counterPomodoro.textContent = counterpomodorovar;
                estaenpomodoro = false;
                Break();
                secondsvarpomodoro = 59;
                minutesvarpomodoro = 24;
            } else{
                if(secondsvarpomodoro < 0){
                    secondsvarpomodoro = 59;
                    minutesvarpomodoro--;
                }
                if(minutesvarpomodoro < 10){
                    minutes.textContent = "0" + `${minutesvarpomodoro}`;
                }else {
                    minutes.textContent = `${minutesvarpomodoro}`;
                }
                if(secondsvarpomodoro < 10){
                    seconds.textContent = "0" + `${secondsvarpomodoro}`;
                } else {
                    seconds.textContent = `${secondsvarpomodoro}`;
                }
                secondsvarpomodoro--;
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
