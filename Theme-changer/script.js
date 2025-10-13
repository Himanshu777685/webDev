let btn = document.querySelector("button");
let body= document.querySelector("body");
let curr_theme;
let theme;

window.addEventListener("load", () => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("light"); // default theme
    }
});

btn.addEventListener("click",()=>{
    if(body.classList.contains("light")){
        curr_theme="light";
        theme="dark";
        btn.textContent ="Switch to Light Mode"
        
        
    }else{
        curr_theme="dark";
        theme= "light";
        btn.textContent ="Switch to Dark Mode"
    }

    // console.log(curr_theme);
    // console.log(theme);

    localStorage.setItem("curr_theme", curr_theme);
    localStorage.setItem("theme" , theme);

    body.classList.replace(localStorage.getItem("curr_theme"),localStorage.getItem("theme"));
})





