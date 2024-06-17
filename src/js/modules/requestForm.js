document.getElementById('requestForm').addEventListener('submit', function (event) {

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams(formData);

    fetch('/submit-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Ensure this is set correctly
        },
        body: urlEncodedData
    }).then(response => response.text()).then(text => {
        console.log(text);
        form.style.display = 'none'; // Hide the form
        document.getElementById('result').style.display = 'block'; // Show the thank you message and button
    }).catch(err => alert('Error submitting request: ' + err.message));
});

function submitAnotherRequest() {
    document.getElementById('requestForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('requestForm').reset(); // Reset the form fields
}