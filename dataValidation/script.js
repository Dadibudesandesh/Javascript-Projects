
const setError = (id, error) => {
    let element = document.getElementById(id);
   let  nav=element.parentElement.querySelector(".error")
    nav.innerHTML=error;
}

const clearError=()=>{
    let errors=document.querySelectorAll(".error");
    for(let error of errors){
        error.innerHTML="";
    }
}

const validForm = () => {

    clearError();
    let returnVal = true;
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let password = document.forms["myForm"]["password"].value;
    let cpassword = document.forms["myForm"]["cpassword"].value;

    if (name.length < 5 ) {
        setError("name", "Name to short");
           returnVal = false;
    }
    if (name.length > 10 ) {
        setError("name", "Name to long");
           returnVal = false;
    }
    if (email.length > 35) {
        setError("email", "email to long");
           returnVal = false;
    }
    if (phone.length >10 || phone.length<10) {
        setError("phone", "Check phone number");
           returnVal = false;
    }
    if (password.length < 8 || password.length>8) {
        setError("password", "password contains only 8 characters");
           returnVal = false;
    }
    if (password!=cpassword) {
        setError("cpassword", "password doesn't match");
           returnVal = false;
    }

    return returnVal;
    // return false;
}