// Define Info class to store user information
class Info {
    constructor() {
        this.name = "";
        this.goal = 2000; // Default goal
        this.current = 0;
        this.CR = this.goal; // Initial remaining calories
    }
}

// Initialize user object
const user = new Info();

// Function to start tracking
function startTracking() {
    const nameInput = document.getElementById("name").value.trim();
    if (!nameInput) {
        alert("Please enter your name.");
        return;
    }

    user.name = nameInput;

    // Hide start section, show tracker section
    document.getElementById("userName").textContent = user.name;
    document.getElementById("startSection").style.display = "none";
    document.getElementById("tracker").style.display = "block";
    updateProgress();
}

// Function to add intake
function addIntake() {
    const intakeInput = parseInt(document.getElementById("intake").value);
    if (isNaN(intakeInput) || intakeInput <= 0) {
        alert("Please enter a valid calorie intake.");
        return;
    }

    // Update current intake and remaining goal
    user.current += intakeInput;
    user.CR = user.goal - user.current;

    // Display output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>You have taken in ${intakeInput} calories.</p>
        <p>You have ${user.CR} calories left.</p>
        <p>Total intake: ${user.current} calories.</p>
    `;

    updateProgress();
}

// Function to update progress bar
function updateProgress() {
    const percentage = Math.floor((user.current / user.goal) * 100);
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    progressBar.value = percentage;
    progressText.textContent = percentage + "%";
}

// Function to reset tracker
function resetTracker() {
    // Reset user object
    user.current = 0;
    user.CR = user.goal;

    // Clear input field and output
    document.getElementById("intake").value = "";
    document.getElementById("output").innerHTML = "";

    updateProgress();
}

// Add event listeners
document.getElementById("startButton").addEventListener("click", startTracking);
document.getElementById("addIntake").addEventListener("click", addIntake);
document.getElementById("resetButton").addEventListener("click", resetTracker);
