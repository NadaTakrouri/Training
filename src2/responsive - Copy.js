//-------------------------------------- CALCULETER---------------------------------------------------//
/*function clearS() {
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
} */
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
    var username= document.getElementById("username").value;
    var Email= document.getElementById("Email").value;
    var Street= document.getElementById("street").value;
    var suite= document.getElementById("suite").value;
    var city= document.getElementById("city").value;
    var zipcode= document.getElementById("zipcode").value;
    var phone= document.getElementById("phone").value;
    var website= document.getElementById("website").value;
    var company= document.getElementById("company").value;
    var nameempty = document.getElementById("namefield");
    var usernameempty = document.getElementById("usernamefield");
    var emailempty = document.getElementById("emailfield");
    var streetempty = document.getElementById("streetfield");
    var suiteempty = document.getElementById("suitefield");
    var cityempty = document.getElementById("cityfield");
    var zipcodeempty = document.getElementById("zipcodefield");
    var phoneempty = document.getElementById("phonefield");
    var websiteempty = document.getElementById("websitefield");
    var companyempty = document.getElementById("companyfield");
    var passempty = document.getElementById("passfield");
    var passcempty = document.getElementById("passcfield");
    var mail_format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (name == ""){
        nameempty.textContent = "*Please enter your name";
        flag = "False";
    } else {
        nameempty.textContent = "";
    }

    if (username == ""){
        usernameempty.textContent = "*Please enter your User name";
        flag = "False";
    } else {
        usernameempty.textContent = "";
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

    if (Street== ""){
        streetempty.textContent = "*Please enter your street";
        flag = "False";
    } else {
        streetempty.textContent = "";
    }

    if (suite== ""){
        suiteempty.textContent = "*Please enter your suite";
        flag = "False";
    } else {
        suiteempty.textContent = "";
    }

    if (city== ""){
        cityempty.textContent = "*Please enter your city";
        flag = "False";
    } else {
        cityempty.textContent = "";
    }

    if (zipcode== ""){
        zipcodeempty.textContent = "*Please enter your zipcode";
        flag = "False";
    } else {
        zipcodeempty.textContent = "";
    }

    
    if (phone== ""){
        phoneempty.textContent = "*Please enter your phone";
        flag = "False";
    } else {
        phoneempty.textContent = "";
    }
    
    if (website== ""){
        websiteempty.textContent = "*Please enter your website";
        flag = "False";
    } else {
        websiteempty.textContent = "";
    }
    
    if (company== ""){
        companyempty.textContent = "*Please enter your company name";
        flag = "False";
    } else {
        companyempty.textContent = "";
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

    } else if (!(Pasval1.length >= 5)){
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
        var table =  document.getElementById("insertionPoint").innerHTML += "<tr id=tr><td id=td>" + name + "</td><td id=td>" + username + "</td><td id=td>" + Email + "</td><td id=td>" + Street + "</td><td id=td>" + suite + "</td><td id=td>" +city+ "</td><td id=td>" +zipcode+ "</td><td id=td>" + phone + "</td><td id=td>" + website + "</td><td id=td>" + company+ "</td></tr>";
        arr.push(name,username,Email,Street,suite,city,zipcode,phone,website,company);
        document.getElementById("psw").value="";
        document.getElementById("psw1").value="";
        document.getElementById("name").value="";
        document.getElementById("username").value="";
        document.getElementById("Email").value="";
        document.getElementById("street").value="";
        document.getElementById("suite").value="";
        document.getElementById("city").value="";
        document.getElementById("zipcode").value="";
        document.getElementById("phone").value="";
        document.getElementById("website").value="";
        document.getElementById("company").value="";
        document.getElementById("namefield").innerHTML="";
        document.getElementById("emailfield").innerHTML="";
        document.getElementById("streetfield").innerHTML="";
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

//---------------------- JSON ------------------------------------------------------------//

function FetchD() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
        if(!response.ok){
          throw new error (response.status);
        }
        return response.json();
       })
       .then((data)=>{
          let Dataj = document.getElementById("insertionPoint");
          for(let i=0; i<data.length;i++){
            let alldata = document.createElement("tr");
            let Ndata = document.createElement("td");
            let UNdata = document.createElement("td");
            let Edata = document.createElement("td");
            let Sdata = document.createElement("td");
            let SUdata = document.createElement("td");
            let Cdata = document.createElement("td");
            let Zdata = document.createElement("td");
            let Pdata = document.createElement("td");
            let Wdata = document.createElement("td");
            let Codata = document.createElement("td");
            let namedata = document.createTextNode(data[i].name);
            let usernamedata = document.createTextNode(data[i].username);
            let emaildata = document.createTextNode(data[i].email);
            let streetdata = document.createTextNode(data[i].address.street);
            let suitedata = document.createTextNode(data[i].address.suite);
            let citydata = document.createTextNode(data[i].address.city);
            let zipcodedata = document.createTextNode(data[i].address.zipcode);
            let phonedata = document.createTextNode(data[i].phone);
            let websitedata = document.createTextNode(data[i].website);
            let companynamedata = document.createTextNode(data[i].company.name);

            
            Ndata.append(namedata);
            UNdata.append(usernamedata);
            Edata.append(emaildata );
            Sdata.append(streetdata );
            SUdata.append(suitedata);
            Cdata.append(citydata); 
            Zdata.append(zipcodedata );
            Pdata.append(phonedata);
            Wdata.append(websitedata);
            Codata.append(companynamedata);
            alldata.append(
                Ndata,
                UNdata,
                Edata,
                Sdata,
                SUdata,
                Cdata,
                Zdata,
                Pdata,
                Wdata,
                Codata
                );
          
          Dataj.append(alldata);
            }
       })
}