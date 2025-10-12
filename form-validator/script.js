let form = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let container = document.querySelector(".container")
let alert = document.querySelector(".alert")

let emailError = document.querySelector("#emailError");
let passError = document.querySelector("#passError");


form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // console.log(dets);
    console.dir(dets);

    // console.log(email.value);
    // console.log(pass.value);

    

    const validemail = emailRegex.test(email.value);
    const validpass = passRegex.test(pass.value);
    if (validemail && validpass) {
        container.style.filter = "blur(3px)";
        alert.style.display = "flex";
        

        setTimeout(() => {
            container.style.filter = "none";
            alert.style.display = "none";
            email.value="";
            pass.value="";
            
        }, 3000);

    } else {

        if (validemail) {
            email.style.border = "2px solid green"
            emailError.style.display = "none";
        } else {
            email.style.border = "2px solid red";
            emailError.style.display = "flex";
        }

        if (validpass) {
            pass.style.border = "2px solid green";
            passError.style.display = "none";
               
        } else {
            pass.style.border = "2px solid red";
            passError.style.display = "flex";
        }
    }


})





// let count = 10;

// let interval = setInterval(() => {
//     if (count >= 1) {
//         console.log(count);
//         count--;
//     } else {
//         clearInterval(interval);
//     }
// }, 1000);