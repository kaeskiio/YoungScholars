// Function to redirect to a new page
function redirectToNewPage() {
    window.location.href = 'index.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('backButton').addEventListener('click', redirectToNewPage);

// Function to redirect to a new page
function taskPage() {
    window.location.href = 'tasks.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('side-button').addEventListener('click', taskPage);

function caloriePage(){
    window.location.href = 'calorie.html'; // Change 'newpage.html' to the desired URL
}

document.getElementById("calorie-button").addEventListener('click', caloriePage);

  