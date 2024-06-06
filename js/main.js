let submitButton = document.getElementById("submit");
let inputName = document.getElementById("inputName");
let email = document.getElementById("email");
let conPassword = document.getElementById("conPassword");
let password = document.getElementById("password");

let nameErro = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let conPassError = document.getElementById("conPassError");
let passIcon = document.querySelector(".passIcon i")

const  emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

submitButton.addEventListener("click", (e) =>{
     e.preventDefault()
     // input name 
    if(inputName.value == ""){
          nameErro.innerHTML = "please your name";
          inputName.style.border = "2px solid red";
    }else{
          nameErro.innerHTML = "";
          inputName.style.border = "";
    }

    // email 
    if(!email.value){
          emailError.innerHTML = "please your email"
          email.style.border = "2px solid red"
    }else{
          if(email.value.match(emailCheck)){
               email.style.border = ""
               emailError.innerHTML = ""
          }else{
               email.style.border = "2px solid red"
               emailError.innerHTML = "Please check your email"
          }
    }
    // Password
    if(!password.value){
          passError.innerHTML = "please your password"
          password.style.border = "2px solid red"
    }else{
          if(password.value.match(passwordRegex)){
               passError.innerHTML = ""
               password.style.border = ""
          }else{
               passError.innerHTML = "Strong Password"
               password.style.border = "2px solid red"
          }
    }
    // Conform Password
    if(!conPassword.value){
          conPassError.innerHTML = "please your conform password"
          conPassword.style.border = "2px solid red"
          conPassError = passIcon.position.top = "10px"
    }else{
          if(password.value === conPassword.value){
               conPassError.innerHTML = ""
               conPassword.style.border = ""
          }else{
               conPassError.innerHTML = "your Password is not match"
               conPassword.style.border = "2px solid red"
          }
    }
    
})

 // icon check 
 passIcon.addEventListener("click", ()=>{
     if(!password.value){
          passError.innerHTML = "please your password"
          password.style.border = "2px solid red"
     }else{
          if(password.type === "password"){
               password.type = "text";
               passIcon.classList.add("fa-eye-slash")
               passIcon.classList.remove("fa-eye")
          }else{
               password.type = "password"
               passIcon.classList.remove("fa-eye-slash");
               passIcon.classList.add("fa-eye");
          }
     }
})
//  conPassword Icon check 
 passIcon.addEventListener("click", ()=>{
     if(!conPassword.value){
          conPassError.innerHTML = "please your password"
          conPassword.style.border = "2px solid red"
     }else{
          if(conPassword.type === "password"){
               conPassword.type = "text";
               passIcon.classList.add("fa-eye-slash")
               passIcon.classList.remove("fa-eye")
          }else{
               conPassword.type = "password"
               passIcon.classList.remove("fa-eye-slash");
               passIcon.classList.add("fa-eye");
          }
     }
})