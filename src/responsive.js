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
//------------------------------------------ PASSWORD show ---------------------------------------------------//

function eyep1(){
   
var icon1 = document.getElementById("eye");
var icon2 = document.getElementById("eye2");
var Ftype = document.getElementById("psw").type;

if(Ftype === 'password'){
    document.getElementById("psw").setAttribute("type", "text1");
    icon1.style.display = "none";
    icon2.style.display = "block";
}
else {
    document.getElementById("psw").setAttribute("type", "password");
    icon2.style.display = "none";
    icon1.style.display = "block";
}

}
//--------------------------------------- PASSWORD CONFIRM EYE ------------------------------------//
function eyep2(){
   
    var iconc1 = document.getElementById("eye1");
    var iconc2 = document.getElementById("eye21");
    var Ftypec = document.getElementById("psw1").type;
    
    if(Ftypec === 'password'){
        document.getElementById("psw1").setAttribute("type", "text1");
        iconc1.style.display = "none";
        iconc2.style.display = "block";
    }
    else {
        document.getElementById("psw1").setAttribute("type", "password");
        iconc2.style.display = "none";
        iconc1.style.display = "block";
    }
    
    }
    

//------------------------------------------ submit button----------------------------------------------------//
var arr = [];
function check(){
    var flag = "True";
    var Pasval1= document.getElementById("psw").value;
    var Pasval2= document.getElementById("psw1").value;
    var name= document.getElementById("name").value;
    var Email= document.getElementById("Email").value;
    var nameempty = document.getElementById("namefield");
    var emailempty = document.getElementById("emailfield");
    var passempty = document.getElementById("passfield");
    var passcempty = document.getElementById("passcfield");
    var mail_format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (name == ""){
        nameempty.textContent = "*Please enter your name";
        flag = "False";
    } else {
        nameempty.textContent = "";
    }
    if (Email== ""){
        emailempty.textContent = "*Please enter your email";
        flag = "False";

    } else if(Email.match(mail_format)){
        emailempty.textContent = "";
    } else {
        emailempty.textContent = "*Email is not Valid";
        flag = "False";
    }

    if (Pasval1 == ""){
       passempty.textContent = "*Please enter a password";
        flag = "False";

    }
    else if(!Pasval1.match("[A-Z]")){
        flag = "False";
        passempty.textContent = "*Missed A Capital Letter";
    }
    else if (!Pasval1.match("[0-9]")){
        flag = "False";
        passempty.textContent = "*Missed A Number";

    } else if (!(Pasval1.length >= 8)){
        flag = "False";
        passempty.textContent = "*Letters Are Not Enough";
    } 
 if (Pasval2== ""){
        passcempty.textContent = "*Please confirm your password";
        flag = "False";
    }
    else if (Pasval1 != Pasval2){                                          
      passcempty.textContent = "*Passwords did not match";
      flag = "False";
    }

    if(flag == "True"){
        var table =  document.getElementById("insertionPoint").innerHTML += "<tr id=tr><td id=td>" + name + "</td><td id=td>" + Email + "</td></tr>";
        arr.push(name,Email);
        document.getElementById("psw").value="";
        document.getElementById("psw1").value="";
        document.getElementById("name").value="";
        document.getElementById("Email").value="";
        document.getElementById("namefield").innerHTML="";
        document.getElementById("emailfield").innerHTML="";
        document.getElementById("passfield").innerHTML="";
        document.getElementById("passcfield").innerHTML="";
       }

} 

//-------------------- Search --------------------------------------------------------------//
function listsearch (){
    var table2 = document.getElementById("table").getElementsByTagName("tr");
    var input = document.getElementById("thefilter").value;
    for(var i = 0; i < arr.length ; i=i+2){
        if((arr[i]).includes(input)){
            table2[(i/2)+1].style.display = ""; 
        }
        else {
            table2[(i/2)+1].style.display = "none";
        } 
    } 
}