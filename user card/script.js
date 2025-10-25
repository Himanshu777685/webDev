function getUser(){
    const container = document.querySelector("#card-container");
    container.innerHTML="";
    
    fetch('https://randomuser.me/api/?results=3')
    .then((raw) => raw.json())
    .then((data) => {
        console.log(data.results)

        data.results.forEach(user => {
             


        // main card
        const card = document.createElement("div");
        card.className = "bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center";

        // image
        const img = document.createElement("img");
        img.className = "w-24 h-24 rounded-full object-cover border-2 border-gray-700";
        img.src = user.picture.large;
        img.alt = "Profile picture";

        // Name
        const Name = document.createElement("h2");
        Name.className = "mt-4 text-xl font-semibold text-white";
        Name.textContent = `${user.name.first} ${user.name.last}`;

        // email
        const email = document.createElement("p");
        email.className = "text-sm text-gray-400 mt-1";
        email.textContent = user.email;

        // Status
        const Status = document.createElement("span");
        Status.className = "mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-100";
        Status.textContent = user.gender ? user.gender : "Unknown";

        // append children
        card.appendChild(img);
        card.appendChild(Name);
        card.appendChild(email);
        card.appendChild(Status);

        // add to container
        container.appendChild(card);
        });
    })
}

getUser();

document.querySelector("button").addEventListener("click",()=>{
    getUser();
})


