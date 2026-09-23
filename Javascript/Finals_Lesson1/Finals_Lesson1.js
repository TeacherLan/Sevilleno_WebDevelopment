function submit(){
    let studentName = document.getElementById("sName").value;
    let studentId = document.getElementById("idNumber").value;
    let studentSection = document.getElementById("gSection").value;
    let studentAge = document.getElementById("age").value;
    let studentEmail = document.getElementById("email").value;

    document.getElementById("result").innerHTML = "Student Information <br>" +
    "Name: " + studentName + "<br>" +
    "Student ID: " + studentId + "<br>" +
    "Section: " + studentSection + "<br>" +
    "Age: " + studentAge + "<br>" +
    "Email: " + studentEmail + "<br>" 
    ;
}

