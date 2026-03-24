let rooms = JSON.parse(localStorage.getItem("rooms")) || [
  { number: "101", status: "Empty" },
  { number: "102", status: "Empty" },
  { number: "103", status: "Occupied" },
  { number: "104", status: "Empty" },
  { number: "105", status: "Occupied" },
  { number: "106", status: "Empty" }
];

function displayRooms() {
  let container = document.getElementById("roomsContainer");
  container.innerHTML = "";

  rooms.forEach((room, index) => {
    let div = document.createElement("div");
    div.className = "card";

    let statusClass = room.status === "Occupied" ? "rejected" : "approved";

    div.innerHTML = `
      <h3>🏢 Room ${room.number}</h3>
      <p>Status: <span class="status ${statusClass}">${room.status}</span></p>

      <button onclick="toggleRoom(${index})">
        ${room.status === "Empty" ? "➕ Allocate" : "❌ Vacate"}
      </button>
    `;

    container.appendChild(div);
  });
}

function toggleRoom(i) {
  rooms[i].status = rooms[i].status === "Empty" ? "Occupied" : "Empty";
  localStorage.setItem("rooms", JSON.stringify(rooms));
  displayRooms();
}

displayRooms();