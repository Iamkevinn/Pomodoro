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
