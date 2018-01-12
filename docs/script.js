var Username = document.getElementById("name")
console.log(Username)

var NameError = document.getElementById("error")

var Pass = document.getElementById("pass")

function getvalues(event){
  event.preventDefault();

  if (Username.value=="Admin" && Pass.value=="admin123") {
    location.replace("./admin.html");
  } else {
    NameError.innerHTML = " Zadali jste spatne udaje!!"
  }
}

var loginForm = document.getElementById("login-form")
var registerForm = document.getElementById("register-form")
loginForm.addEventListener("submit",getvalues)


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
