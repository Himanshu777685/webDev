let main = document.querySelector(".main");


function toaster (){
let toasters = document.querySelector(".toasters");
   return function (mssg){
    let div = document.createElement("div");
    div.className += "toaster bg-gray-600 text-white border-solid p-[9px] bg-gray-100  shadow-lg shadow-gray-500 transition";

    div.textContent=mssg;

    toasters.appendChild(div);

     setTimeout(() => {
      div.classList.remove("opacity-0", "translate-y-3");
      div.classList.add("opacity-100", "translate-y-0");
    }, 50);

    // Fade out after 3s
    setTimeout(() => {
      div.classList.remove("opacity-100", "translate-y-0");
      div.classList.add("opacity-0", "translate-y-3");
    }, 3000);

    // Remove after animation ends
    setTimeout(() => {
      div.remove();
    }, 3500);
}

}

let create = toaster();
create("hello world");

// create("are you ok ?")