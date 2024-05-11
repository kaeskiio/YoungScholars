// Function to redirect to a new page
function redirectToNewPage() {
    window.location.href = 'index.html'; // Change 'newpage.html' to the desired URL
}

    // Add event listener to the button
    document.getElementById('home-button').addEventListener('click', redirectToNewPage);


function taskMangerPage(){
    window.location.href = 'info.html'; // Change 'newpage.html' to the desired URL
}
//Change

document.getElementById("info-button").addEventListener('click', taskMangerPage);

function caloriePage(){
    window.location.href = 'tasks.html'; // Change 'newpage.html' to the desired URL
}

document.getElementById("task-button").addEventListener('click', caloriePage);




document.addEventListener('DOMContentLoaded', function () {
    const calorieGoalForm = document.getElementById('calorieGoalForm');
    const calorieIntakeSection = document.getElementById('calorieIntakeSection');
    const calorieIntakeForm = document.getElementById('calorieIntakeForm');
    const calorieIntakeDisplay = document.getElementById('calorieIntakeDisplay');

    let calorieGoal = 0;
    let totalCalories = 0;

    calorieGoalForm.addEventListener('submit', function (event) {
        event.preventDefault();
        calorieGoal = parseInt(document.getElementById('calorieGoalInput').value);
        if (!isNaN(calorieGoal)) {
            calorieGoalSection.style.display = 'none';
            calorieIntakeSection.style.display = 'block';
        } else {
            alert('Please enter a valid calorie goal.');
        }
    });

    calorieIntakeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const intake = parseInt(document.getElementById('calorieIntakeInput').value);
        if (!isNaN(intake)) {
            totalCalories += intake;
            displayCalorieIntake();
        } else {
            alert('Please enter a valid calorie intake.');
        }
    });

    function displayCalorieIntake() {
        calorieIntakeDisplay.innerHTML = `
            <p>Total Calories Consumed: ${totalCalories}</p>
            <p>Calories Remaining: ${calorieGoal - totalCalories}</p>
        `;
    }
});