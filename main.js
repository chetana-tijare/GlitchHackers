// LOAD COUNTS
let passes = JSON.parse(localStorage.getItem("passes")) || [];
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

document.getElementById("passCount").innerText = passes.length;
document.getElementById("complaintCount").innerText = complaints.length;

// NAVIGATION
function openStudents() {
  alert("👨‍🎓 Total Students: 120\n(Room data managed in system)");
}

function openGatePass() {
  window.location.href = "gatepass.html";
}

function openComplaints() {
  window.location.href = "complaints.html";
}

// 🔥 ACTIVITY SYSTEM
function loadActivity() {
  let list = document.getElementById("activityList");
  list.innerHTML = "";

  let passes = JSON.parse(localStorage.getItem("passes")) || [];
  let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  // Gate pass activity
  passes.slice(-3).reverse().forEach(p => {
    let li = document.createElement("li");
    li.innerText = `🚪 ${p.name} requested (${p.status})`;
    list.appendChild(li);
  });

  // Complaint activity
  complaints.slice(-3).reverse().forEach(c => {
    let li = document.createElement("li");
    li.innerText = `⚠ ${c.text}`;
    list.appendChild(li);
  });

  if (list.innerHTML === "") {
    list.innerHTML = "<li>No recent activity</li>";
  }
}

loadActivity();
