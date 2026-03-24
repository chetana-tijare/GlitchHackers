// ----------------------
// Gate Pass System Logic
// ----------------------

function addGatePass() {
    // Get input values
    const name = document.getElementById("studentName").value;
    const reason = document.getElementById("reason").value;

    if (name === "" || reason === "") {
        alert("Please fill all fields");
        return;
    }

    // Create a card for request
    const card = document.createElement("div");
    card.className = "card";

    // Default status
    let status = "Pending";

    // HTML content of card
    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>Status: <span class="status">${status}</span></p>
        <button class="approve">Approve</button>
        <button class="reject">Reject</button>
    `;

    // Get buttons
    const approveBtn = card.querySelector(".approve");
    const rejectBtn = card.querySelector(".reject");
    const statusText = card.querySelector(".status");

    // Approve button logic
    approveBtn.onclick = function() {
        statusText.textContent = "Approved";
        statusText.style.color = "green";
    };

    // Reject button logic
    rejectBtn.onclick = function() {
        statusText.textContent = "Rejected";
        statusText.style.color = "red";
    };

    // Add card to list
    document.getElementById("gatePassList").appendChild(card);

    // Clear inputs
    document.getElementById("studentName").value = "";
    document.getElementById("reason").value = "";
}


// ----------------------
// Complaint System Logic
// ----------------------

function addComplaint() {
    const complaintText = document.getElementById("complaintInput").value;

    if (complaintText === "") {
        alert("Enter a complaint");
        return;
    }

    // Create card
    const card = document.createElement("div");
    card.className = "card";

    // Default status
    let status = "Pending";

    card.innerHTML = `
        <p>${complaintText}</p>
        <p>Status: <span class="status">${status}</span></p>
        <button class="resolve">Mark as Resolved</button>
    `;

    const resolveBtn = card.querySelector(".resolve");
    const statusText = card.querySelector(".status");

    // Resolve button logic
    resolveBtn.onclick = function() {
        statusText.textContent = "Resolved";
        statusText.style.color = "green";
    };

    // Add to list
    document.getElementById("complaintList").appendChild(card);

    // Clear input
    document.getElementById("complaintInput").value = "";
}