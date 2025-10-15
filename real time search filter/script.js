const users = [
  { id: 1, name: "Aarav Mehta", bio: "Tech enthusiast and front-end developer 💻", pic: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Bella Sharma", bio: "Loves UI design and photography 📸", pic: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Charlie Roy", bio: "Full-stack web developer from Delhi 🌐", pic: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Diana Kapoor", bio: "Data analyst and bookworm 📊📚", pic: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Ethan Verma", bio: "Gamer and aspiring backend engineer 🎮", pic: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Fiona Nair", bio: "Creative coder who loves minimalism ✨", pic: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 7, name: "George Singh", bio: "DevOps learner and open-source contributor ⚙️", pic: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: 8, name: "Himanshu Kumar", bio: "CSE (Data Science) student and dreamer 🚀", pic: "https://randomuser.me/api/portraits/men/8.jpg" },
  { id: 9, name: "Ishita Patel", bio: "Passionate about AI and data science 🤖", pic: "https://randomuser.me/api/portraits/women/9.jpg" },
  { id: 10, name: "Jay Malhotra", bio: "Love solving real-world problems with code 🧠", pic: "https://randomuser.me/api/portraits/men/10.jpg" },
  { id: 11, name: "Kiran Das", bio: "UX researcher and traveler ✈️", pic: "https://randomuser.me/api/portraits/women/11.jpg" },
  { id: 12, name: "Liam Thomas", bio: "Building web apps with React and Node ⚛️", pic: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 13, name: "Mira Joshi", bio: "Pythonista and AI enthusiast 🐍🤖", pic: "https://randomuser.me/api/portraits/women/13.jpg" },
  { id: 14, name: "Nikhil Rana", bio: "Cybersecurity geek 🔐", pic: "https://randomuser.me/api/portraits/men/14.jpg" },
  { id: 15, name: "Olivia Fernandes", bio: "UI/UX designer & frontend developer 💅", pic: "https://randomuser.me/api/portraits/women/15.jpg" },
  { id: 16, name: "Pranav Iyer", bio: "Student exploring AI and cloud ☁️", pic: "https://randomuser.me/api/portraits/men/16.jpg" },
  { id: 17, name: "Quincy Das", bio: "Learning full stack and love building things 🧩", pic: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: 18, name: "Riya Sen", bio: "Creative soul and code lover 💖", pic: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: 19, name: "Sahil Gupta", bio: "JavaScript wizard and football fan ⚽", pic: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: 20, name: "Tanya Jain", bio: "Designer + developer = dream combo 🎨💻", pic: "https://randomuser.me/api/portraits/women/20.jpg" },
  { id: 21, name: "Uday Chauhan", bio: "Engineer with a passion for startups 🚀", pic: "https://randomuser.me/api/portraits/men/21.jpg" },
  { id: 22, name: "Vani Reddy", bio: "Loves React, Tailwind, and coffee ☕", pic: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 23, name: "Waseem Akhtar", bio: "Backend developer learning microservices 🧩", pic: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 24, name: "Xena D’Souza", bio: "Creative designer and blogger 🖋️", pic: "https://randomuser.me/api/portraits/women/24.jpg" },
  { id: 25, name: "Yash Thakur", bio: "Love algorithms and clean code 🧠", pic: "https://randomuser.me/api/portraits/men/25.jpg" },
  { id: 26, name: "Zara Khan", bio: "Exploring AI tools and automation 🤖", pic: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: 27, name: "Ankit Mishra", bio: "Frontend developer passionate about UI 🖥️", pic: "https://randomuser.me/api/portraits/men/27.jpg" },
  { id: 28, name: "Bhavna Rao", bio: "Loves cloud computing and analytics ☁️📈", pic: "https://randomuser.me/api/portraits/women/28.jpg" },
  { id: 29, name: "Chirag Bansal", bio: "Backend engineer & music lover 🎧", pic: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: 30, name: "Deepika Jain", bio: "Always learning something new 🌱", pic: "https://randomuser.me/api/portraits/women/30.jpg" },
  { id: 31, name: "Eshan Gill", bio: "AI/ML researcher in progress 🤖📊", pic: "https://randomuser.me/api/portraits/men/31.jpg" },
  { id: 32, name: "Fatima Noor", bio: "Creative coder and painter 🎨💻", pic: "https://randomuser.me/api/portraits/women/32.jpg" },
  { id: 33, name: "Gaurav Singh", bio: "Building scalable apps with Node ⚙️", pic: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 34, name: "Harini Menon", bio: "Tech + Art = my happy place 🎭💡", pic: "https://randomuser.me/api/portraits/women/34.jpg" },
  { id: 35, name: "Ishan Gupta", bio: "Loves to build and break code 🧩", pic: "https://randomuser.me/api/portraits/men/35.jpg" },
  { id: 36, name: "Jiya Arora", bio: "Data visualization nerd 📊✨", pic: "https://randomuser.me/api/portraits/women/36.jpg" },
  { id: 37, name: "Kabir Kapoor", bio: "Full-stack intern | Lifelong learner 🧠", pic: "https://randomuser.me/api/portraits/men/37.jpg" },
  { id: 38, name: "Lavanya Singh", bio: "AI + Design = future 💫", pic: "https://randomuser.me/api/portraits/women/38.jpg" },
  { id: 39, name: "Manav Tiwari", bio: "Software dev | Loves open source 🌍", pic: "https://randomuser.me/api/portraits/men/39.jpg" },
  { id: 40, name: "Nisha Bhat", bio: "ML engineer in the making 🤖", pic: "https://randomuser.me/api/portraits/women/40.jpg" },
  { id: 41, name: "Om Prakash", bio: "C developer | System-level enthusiast 💾", pic: "https://randomuser.me/api/portraits/men/41.jpg" },
  { id: 42, name: "Pia Sharma", bio: "Student learning JS and React ⚛️", pic: "https://randomuser.me/api/portraits/women/42.jpg" },
  { id: 43, name: "Qadir Hussain", bio: "Problem solver and tech blogger ✍️", pic: "https://randomuser.me/api/portraits/men/43.jpg" },
  { id: 44, name: "Rachita Jain", bio: "Passionate about data visualization 📊", pic: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 45, name: "Samar Gill", bio: "JS + Node + Mongo = ❤️", pic: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 46, name: "Tia Banerjee", bio: "Building creative web experiences 🎨", pic: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: 47, name: "Utkarsh Pandey", bio: "Student coder | Tech explorer 🌍", pic: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: 48, name: "Vanya Nair", bio: "Frontend designer | Minimalist ✨", pic: "https://randomuser.me/api/portraits/women/48.jpg" },
  { id: 49, name: "Wasim Khan", bio: "Learning backend and databases 🗄️", pic: "https://randomuser.me/api/portraits/men/49.jpg" },
  { id: 50, name: "Xyla Pereira", bio: "Budding AI engineer 🤖", pic: "https://randomuser.me/api/portraits/women/50.jpg" }
];



const cardsContainer = document.querySelector(".cards");
const input = document.querySelector("input");
const msg = document.querySelector(".mssg");

function showUsers(arr) {
  cardsContainer.replaceChildren();

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "bg-img";
    img.src = user.pic;
    img.alt = user.name;

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blurredLayer, content);
    cardsContainer.append(card);
  });
}

showUsers(users);


input.addEventListener("input", () => {
  const search = input.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search)
  );

  showUsers(filteredUsers);

  
  msg.style.opacity = filteredUsers.length === 0 ? "1" : "0";
});
