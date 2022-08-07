
//-------------------------------------- CALCULETER---------------------------------------------------//
function clearS() {
    document.getElementById("display").innerHTML = "";
}

var flag = "False";
function display(value) {
    if( flag == "True"){
        document.getElementById("display").innerHTML = "";
        flag = "False"
    }
    document.getElementById("display").innerHTML += value;
}



function calculate() {
    var x = document.getElementById("display").innerHTML;
    var y = eval(x);
    document.getElementById("display").innerHTML = y;
    flag = "True";
}