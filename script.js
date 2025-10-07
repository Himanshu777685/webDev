let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

let main = document.querySelector("#main")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    // console.dir(dets);

    // inputs.forEach((input) => {
    //     console.log(input.value);
    // })

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let profession = document.createElement("div");
    profession.classList.add("profession");

    let name = document.createElement("div");
    name.classList.add("name");

    let about = document.createElement("div");
    about.classList.add("about");


    name.innerHTML = `<h2>${inputs[1].value}</h2>`;
    profession.innerHTML = `<h3>${inputs[2].value}</h3>`;
    about.innerHTML = `<p>${inputs[3].value}</p>`;




    let img = document.createElement("img");
    img.setAttribute("src" , inputs[0].value );


    profile.appendChild(img);

    card.appendChild(profile);
    card.appendChild(name);
    card.appendChild(profession);
    card.appendChild(about);

    main.appendChild(card);



    inputs.forEach((input)=>{
        if(input.type!=="submit"){
            input.value="";
        }
    })


})

