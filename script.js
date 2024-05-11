// Function to redirect to a new page
function redirectToNewPage() {
    window.location.href = 'info.html'; // Change 'newpage.html' to the desired URL
}

    // Add event listener to the button
    document.getElementById('myButton').addEventListener('click', redirectToNewPage);


function taskMangerPage(){
    window.location.href = 'tasks.html'; // Change 'newpage.html' to the desired URL
}

document.getElementById("taskButton").addEventListener('click', taskMangerPage);





// Function to collect user input
function collectUserInput() {
    // Get values from input boxes and assign them to variables
    let bpmValue = document.getElementById('bpmInput').value;
    var oxygenValue = document.getElementById('oxygenInput').value;
    var hydrationValue = document.getElementById('hydrationInput').value;
    var pressureValue = document.getElementById('pressureInput').value;
    var bpmDisplay = "";
    var oxygenDisplay = "";
    var hydrationDisplay = "";
    var pressureDisplay = "";

    //BPM value display
    if(bpmValue >= 60 && bpmValue <=100)
    {
        bpmDisplay = `Your heart rate is ${bpmValue} bpm. You have a normal heart rate! Keep up the good work!`;
    }
    else if(bpmValue < 60)
    {
        bpmDisplay = `Your heart rate is ${bpmValue} bpm. You have a low heart rate. Either you're an excellent athlete or are unhealthy. See the More Information tab.`;
    }
    else if(bpmValue >100)
    {
        bpmDisplay = `Your heart rate is ${bpmValue} bpm. You have a high heart rate. This is not healthy if you are not exercising. See the More Information tab.`;
    }

    //Blood Oxygen value display
    if(oxygenValue >= 93 &&  oxygenValue <=100)
    {
        oxygenDisplay = `Your blood oxygen percentage is ${oxygenValue}. You have normal blood oxygen levels! Keep up the good work!`;
    }
    else if(oxygenValue < 93)
    {
        oxygenDisplay = `Your blood oxygen percentage is ${oxygenValue}. You have low blood oxygen levels. See the More Information tab for assistance.`;
    }
    
    //Hydration value display
    if(hydrationValue>=45 && hydrationValue <=65){
        hydrationDisplay = `Your hydration is ${hydrationValue} percent. You have a normal hydration! Keep drinking water!`;
    }
    else if(hydrationValue < 45 || hydrationValue >65){
        hydrationDisplay = `Your hydration is ${hydrationValue} percent. You have an abnormal hydration. See the More Information Tab.`;
    }

    //Blood Pressure value display
    if(pressureValue < 120){
        pressureDisplay = `Your systolic blood pressure is ${pressureValue} mmHg. You have a normal blood pressure!`
    }
    else if(pressureValue >= 120){
        pressureDisplay = `Your systolic blood pressure is ${pressureValue} mmHg. You have a high blood pressure. See the More Information Tab.`
    }
    // Display the collected values at the bottom of the page
    document.getElementById('resultDisplay').innerHTML = `
        <p>BPM: ${bpmDisplay}</p>
        <p>Blood Oxygen: ${oxygenDisplay}</p>
        <p>Hydration: ${hydrationDisplay}</p>
        <p>Blood Pressure: ${pressureDisplay}</p>
    `;
}