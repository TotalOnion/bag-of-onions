const length = document.getElementById('length');
const input = document.getElementById('password');
const button = document.getElementById('password-button');
const radioGroup = document.querySelector('.radio-group');
const checkboxGroup = document.querySelector('.checkbox-group');
const copy = document.getElementById('copy');

radioGroup.addEventListener('change', generatePassword)
checkboxGroup.addEventListener('change', generatePassword)
length.addEventListener('input', updateLengthValue);
button.addEventListener('click', generatePassword);
input.addEventListener('input', checkStrength);
copy.addEventListener('click', copyToClipboard);

generatePassword();

function updateLengthValue() {
    const length = document.getElementById('length').value;
    document.getElementById('lengthValue').textContent = length;
    generatePassword();
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const easyToSay = document.getElementById('easyToSay').checked;
    const easyToRead = document.getElementById('easyToRead').checked;
    const allCharacters = document.getElementById('allCharacters').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let charset = "";
    if (easyToSay) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (easyToRead) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=".replace(/[ilLI|`oO0]/g, '');
    } else if (allCharacters) {
        charset = "";
        if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) charset += "0123456789";
        if (symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    // Ensure charset is not empty
    if (!charset) {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    const passwordField = document.getElementById('password');
    passwordField.value = password;
    checkStrength();
}

function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthBarFill = document.getElementById('strengthBarFill');
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    let strengthPercentage = (strength / 6) * 100;
    let color = 'red';

    if (strengthPercentage > 50) color = 'orange';
    if (strengthPercentage > 75) color = 'yellow';
    if (strengthPercentage > 85) color = 'lightgreen';
    if (strengthPercentage === 100) color = 'green';

    strengthBarFill.style.width = `${strengthPercentage}%`;
    strengthBarFill.style.backgroundColor = color;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    // alert("Password copied to clipboard!");
}