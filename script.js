function redirectToNewPage() {
    window.location.href = 'newpage.html'; // Change 'newpage.html' to the desired URL
}

// Add event listener to the button
document.getElementById('myButton').addEventListener('click', redirectToNewPage);