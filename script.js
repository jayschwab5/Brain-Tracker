const brainState = document.getElementById('brainState');
const brainImage = document.getElementById('brainImage');
const form = document.getElementById('brainSurvey');

brainState.addEventListener('input', () => {
    const value = brainState.value;
    
    // Dynamically adjust the image opacity and size based on input
    brainImage.style.filter = `contrast(${value}%)`;
    brainImage.style.transform = `scale(${1 + (value / 200)})`;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const brainScore = brainState.value;

    // Send data to Google Sheets via Google Apps Script
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        body: JSON.stringify({ name, brainScore }),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => alert('Survey submitted!'))
      .catch(error => console.error('Error:', error));
});
