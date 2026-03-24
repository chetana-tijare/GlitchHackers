// FORCE RESET MENU EVERY TIME
let menu = [
  { item: "Poha", likes: 0, dislikes: 0 },
  { item: "Rice & Dal", likes: 0, dislikes: 0 },
  { item: "Paneer Butter Masala", likes: 0, dislikes: 0 },
  { item: "Chapati & Sabji", likes: 0, dislikes: 0 },
  { item: "Idli Sambhar", likes: 0, dislikes: 0 },
  { item: "Veg Biryani", likes: 0, dislikes: 0 }
];

// SAVE fresh data
localStorage.setItem("menu", JSON.stringify(menu));

function displayMenu() {
  let container = document.getElementById("menu");
  container.innerHTML = "";

  menu.forEach((m, index) => {
    let div = document.createElement("div");
    div.className = "card";

    let total = m.likes + m.dislikes;
    let percent = total === 0 ? 0 : Math.round((m.likes / total) * 100);

    div.innerHTML = `
      <h3>${m.item}</h3>
      <p>👍 ${m.likes} | 👎 ${m.dislikes}</p>
      <p>Popularity: ${percent}%</p>
      <button onclick="like(${index})">Like</button>
      <button onclick="dislike(${index})">Dislike</button>
    `;

    container.appendChild(div);
  });
}

function like(i) {
  menu[i].likes++;
  localStorage.setItem("menu", JSON.stringify(menu));
  displayMenu();
}

function dislike(i) {
  menu[i].dislikes++;
  localStorage.setItem("menu", JSON.stringify(menu));
  displayMenu();
}

displayMenu();