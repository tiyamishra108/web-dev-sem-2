// Select Elements
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventsContainer = document.getElementById("eventsContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const demoText = document.getElementById("demoText");
const keyDisplay = document.getElementById("keyDisplay");

// Function to Create Event Card
function createEventCard(title, date, category, description) {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
        <button class="delete-btn">×</button>
        <h3>${title}</h3>
        <div class="event-date">📅 ${date}</div>
        <span class="badge">${category}</span>
        <p class="event-description">${description}</p>
    `;

    // Delete button functionality
    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
    });
    eventsContainer.appendChild(card);
}

// Add Event from Form
eventForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = eventTitle.value.trim();
    const date = eventDate.value;
    const category = eventCategory.value;
    const description = eventDescription.value.trim();
    if (title === "" || date === "") {
        alert("Please fill in required fields!");
        return;
    }
    createEventCard(title, date, category, description);
    eventForm.reset();
});

// Clear All Events
clearAllBtn.addEventListener("click", function () {
    eventsContainer.innerHTML = "";
});

// Add Sample Events
addSampleBtn.addEventListener("click", function () {
    createEventCard(
        "Web Dev ",
        "2026-2-24",
        "workshop",
        "knowledegable workshop for students"
    );
    createEventCard(
        "club meeting",
        "2026-02-23",
        "conference",
        "club activity discussion"
    );
});

// DOM Manipulation Demo
if (demoText) {
    demoText.innerHTML = "<strong>Bold Text</strong> with spaces";
}
document.addEventListener("keydown", function (e) {
    if (keyDisplay) {
        keyDisplay.textContent = "You pressed: " + e.key;
    }
});