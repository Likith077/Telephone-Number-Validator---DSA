document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

function validatePhoneNumber() {
    const input = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = '';

    if (!input) {
        alert('Please provide a phone number');
        return;
    }

    const validPhoneNumber = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(input);

    if (validPhoneNumber) {
        resultsDiv.textContent = `Valid US number: ${input}`;
        resultsDiv.classList.add('valid');
        resultsDiv.classList.remove('invalid');
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
        resultsDiv.classList.add('invalid');
        resultsDiv.classList.remove('valid');
    }
}

function clearResults() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
}