


var form = document.createElement("form")
var div = document.createElement("div")
var h1 = document.createElement("h1")
var firstnam = document.createElement("input")
var lastnam = document.createElement("input")
var email = document.createElement("input")
var password = document.createElement("input")
var repassword = document.createElement("input")
var button = document.createElement("button")
//=========================================

div.style.width = "35%";
div.style.height = "90vh";
div.style.background= "#76b5c5";
div.style.margin = "auto"
div.style.marginTop = "20px";
div.style.boxShadow = "px 0px 0px 0px #0E5E6F";
div.style.borderRadius = "15px";
form.append(div)
document.body.append(form)
//===========================================
h1.setAttribute("class", "heading");
h1.style.fontSize = "50px";
h1.style.fontFamily = "sans-sarif";
h1.innerHTML = "Sign Up";
h1.style.color ="#0E5E6F";
h1.style.marginLeft = "35%"
div.append(h1)

//firstnam======================================
firstnam.setAttribute('placeholder',"ENTER NAME")
firstnam.style.backgroundColor = "#eeeee4"
firstnam.style.border = "2px solid #60b2c7"
firstnam.style.marginLeft = "10%"
firstnam.style.padding = "2vh 17vh"
firstnam.style.borderRadius = "20px";
firstnam.style.letterSpacing = "5px"
div.append(firstnam)

//lastname===================================
lastnam.setAttribute('placeholder',"ENTER F/NAME")
lastnam.style.backgroundColor = "#eeeee4";
lastnam.style.border = "2px solid #60b2c7";
lastnam.style.marginLeft = "10%";
lastnam.style.padding = "2vh 17vh";
lastnam.style.borderRadius = "20px";
lastnam.style.letterSpacing = "5px";
lastnam.style.marginTop = "30px";
div.append(lastnam)

//email===========================================
email.setAttribute('placeholder',"ENTER EMAIL")
email.style.backgroundColor = "#eeeee4"
email.style.border = "2px solid #60b2c7"
email.style.marginLeft = "10%"
email.style.padding = "2vh 17vh"
email.style.borderRadius = "20px";
email.style.letterSpacing = "5px"
email.style.marginTop = "30px"
div.append(email)

//password =================================
password.setAttribute('placeholder',"ENTER PASSWORD")
password.style.backgroundColor = "#eeeee4"
password.style.border = "2px solid #60b2c7"
password.style.marginLeft = "10%"
password.style.padding = "2vh 17vh"
password.style.borderRadius = "20px";
password.style.letterSpacing = "3px"
password.style.marginTop = "30px"
div.append(password)

//RE password =================================
repassword.setAttribute('placeholder',"CONFIRMED PASSWORD")
repassword.style.backgroundColor = "#eeeee4"
repassword.style.border = "2px solid #60b2c7"
repassword.style.marginLeft = "10%"
repassword.style.padding = "2vh 17vh"
repassword.style.borderRadius = "20px";
repassword.style.letterSpacing = "3px"
repassword.style.marginTop = "30px"
div.append(repassword)

//button=========================================
button.innerHTML = 'login'
button.style.width ='18%';
button.style.height ='5vh';
button.style.backgroundColor = '#0E5E6F'
button.style.marginLeft = "40%"
button.style.marginTop = "8%"
button.style.borderRadius = "10px";
button.style.border = "2px solid #00000"
div.append(button)







//body===========================================
var body1 = document.getElementById("body1")
body1.style.backgroundColor = "#76b5c5"






