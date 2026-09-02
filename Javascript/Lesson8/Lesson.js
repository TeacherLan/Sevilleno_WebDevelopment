function greetMe(){
    alert("HELLO MUNDO!");
}

function changeMe(){
    document.getElementById("paragraph").innerHTML="POGI AKO!";
}

function changeColor(){
    document.getElementById("name").style.color="orange";
}

function hide(){
    document.getElementById("name2").style.display="none";
}

function show(){
    document.getElementById("name2").style.display="";
}

function turnOff(){
    document.getElementById("lightBulb").src="img/light_off.png";
}


function turnOn(){
    document.getElementById("lightBulb").src="img/light_on.png";
}