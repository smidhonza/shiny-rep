var Username = document.getElementById("login-name")
console.log(Username)

var NameError = document.getElementById("error")

var Pass = document.getElementById("login-pass")

function getvalues(event){
  event.preventDefault();

  if (Username.value=="Admin" && Pass.value=="admin123") {
    location.replace("./admin.html");
  } else {
    NameError.innerHTML = " Zadali jste spatne udaje!!"
  }
}

function othervalues(event){
  event.preventDefault();


  var register_name = document.getElementById("register-name");
  var register_email = document.getElementById("register-email");
  var register_pass = document.getElementById("register-pass");

  localStorage.setItem("name", register_name.value);
  localStorage.setItem("email", register_email.value);
  localStorage.setItem("pass", register_pass.value);

  location.replace("./registered.html");
}


var loginForm = document.getElementById("login-form")
var registerForm = document.getElementById("register-form")
loginForm.addEventListener("submit",getvalues)
registerForm.addEventListener("submit",othervalues)

function registerClicked() {
  loginForm.classList.add("hide");
  registerForm.classList.remove("hide");
}

var registerLink = document.getElementById("register");
registerLink.addEventListener("click", registerClicked)

document
.getElementById("login")
.addEventListener("click", function () {
   registerForm.classList.add("hide");
   loginForm.classList.remove("hide");
 });
