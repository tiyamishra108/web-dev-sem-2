const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Sample events
let sampleEvent = [
    {
        title: "Web Dev Workshop",
        date: "2026-04-06",
        category: "Workshop",
        description: "Hands-on HTML, CSS & JS session."
    },
    {
        title: "Tech Conference",
        date: "2026-04-07",
        category: "Conference",
        description: "Networking and keynote sessions."
    }
];

// Create Event Card
function createEventCard(eventData) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
        <h3>${eventData.title}</h3>
        <p><strong>Date:</strong> ${eventData.date}</p>
        <p><strong>Category:</strong> ${eventData.category}</p>
        <p><strong>Description:</strong> ${eventData.description}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Delete functionality
    const deleteBtn = eventCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        eventCard.remove();
    });

    return eventCard;
}

// Add Event to DOM
function addEvent(eventData) {
    const eventCard = createEventCard(eventData);
    eventContainer.appendChild(eventCard);
}

// Form Submit (Add Event)
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});

// Add Sample Data Button
addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => {
        addEvent(event);
    });
});

// Clear All Button
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "";
});
