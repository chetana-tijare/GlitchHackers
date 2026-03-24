let passes = JSON.parse(localStorage.getItem("passes")) || [];

function addPass() {
  let name = document.getElementById("name").value;
  let reason = document.getElementById("reason").value;

  if (name === "" || reason === "") {
    alert("Fill all fields");
    return;
  }

  let pass = {
    name,
    reason,
    status: "Pending"
  };

  passes.push(pass);
  localStorage.setItem("passes", JSON.stringify(passes));

  display();

  document.getElementById("name").value = "";
  document.getElementById("reason").value = "";
}

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  passes.forEach((p, i) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <b>${p.name}</b> - ${p.reason} <br>
      Status: <span class="status ${p.status.toLowerCase()}">${p.status}</span><br>

      <button onclick="approve(${i})">✅ Approve</button>
      <button onclick="reject(${i})">❌ Reject</button>
    `;

    list.appendChild(li);
  });
}

function approve(i) {
  passes[i].status = "Approved";
  localStorage.setItem("passes", JSON.stringify(passes));
  display();
}

function reject(i) {
  passes[i].status = "Rejected";
  localStorage.setItem("passes", JSON.stringify(passes));
  display();
}

display();