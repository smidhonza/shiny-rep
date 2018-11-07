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

var regError = document.getElementById("error-reg")

function othervalues(event){
  event.preventDefault();
  var register_name = document.getElementById("register-name");
  var register_email = document.getElementById("register-email");
  var register_pass = document.getElementById("register-pass");

var body = {
  email: register_email.value,
  name: register_name.value,
  password: register_pass.value,
};


  fetch('http://localhost:1234/register', {
    method:'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body)
  })
  .then(raw => raw.json())
  .then(response => {
    console.log('vratilo se:', response)
    if (response.status == 'ok'){
      location.replace("./index.html");
    } else {
      regError.innerHTML = response.message;
    }
  })
  .catch(error => {
    regError.innerHTML = error.message;
  })
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
