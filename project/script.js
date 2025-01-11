// Array to hold the list of threats
let threatsList = [];

// Function to render the threat list dynamically
function renderThreats() {
    const threatsBody = document.getElementById("threats-body");
    threatsBody.innerHTML = ""; // Clear the table before rendering

    threatsList.forEach((threat, index) => {
        const row = document.createElement("tr");

        // Create table cells
        const threatCell = document.createElement("td");
        threatCell.textContent = threat.name;

        const severityCell = document.createElement("td");
        severityCell.textContent = threat.severity;

        const statusCell = document.createElement("td");
        const status = document.createElement("span");
        status.classList.add("status", threat.status === "Critical" ? "critical" : "warning");
        status.textContent = threat.status;
        statusCell.appendChild(status);

        const actionsCell = document.createElement("td");

        // Create Edit and Delete buttons
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.onclick = () => editThreat(index);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = () => deleteThreat(index);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        // Append all cells to the row
        row.appendChild(threatCell);
        row.appendChild(severityCell);
        row.appendChild(statusCell);
        row.appendChild(actionsCell);

        // Append the row to the table body
        threatsBody.appendChild(row);
    });
}

// Function to add a new threat
function addThreat() {
    const name = document.getElementById("threat-name").value;
    const severity = document.getElementById("threat-severity").value;
    
    if (name && severity) {
        const newThreat = {
            name,
            severity,
            status: severity.toLowerCase() === 'high' ? 'Critical' : 'Warning',
        };

        threatsList.push(newThreat);
        renderThreats();
        document.getElementById("threat-name").value = "";
        document.getElementById("threat-severity").value = "";
    }
}

// Function to edit a threat
function editThreat(index) {
    const threat = threatsList[index];
    const name = prompt("Edit Threat Name", threat.name);
    const severity = prompt("Edit Severity", threat.severity);

    if (name && severity) {
        threatsList[index] = {
            name,
            severity,
            status: severity.toLowerCase() === 'high' ? 'Critical' : 'Warning',
        };
        renderThreats();
    }
}

// Function to delete a threat
function deleteThreat(index) {
    threatsList.splice(index, 1);
    renderThreats();
}

// Function to trigger threat analysis and show an alert
function showThreatAnalysis() {
    // Here we will trigger the alert for threat analysis
    alert("Threat analysis completed successfully!");
}

// Initial render of threats
renderThreats();
