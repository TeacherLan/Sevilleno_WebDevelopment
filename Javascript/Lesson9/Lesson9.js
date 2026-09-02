console.log("CONSOLE.LOG TO!!")

function clickMe(){
    alert("HELLO WORLD");
    alert("HEHEHE WORLD");
}


function change(){
    document.getElementById("sentence").innerHTML = "INNER HTML TO!";
}

function submitForm(){
    var age = document.getElementById("age").value;
    document.getElementById("output").innerHTML = "Hello Maxinne you are " + age + " years old";
    console.log(age);
}
