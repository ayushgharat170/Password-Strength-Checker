const commonPasswords = [
    "123456", "password", "123456789", "12345678", "12345",
    "111111", "1234567", "sunshine", "qwerty", "iloveyou"
];

function evaluatePassword() {
    const pwd = document.getElementById('password-field').value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    const suggestionsEl = document.getElementById('suggestions');

    let score = 0;
    let suggestions = [];

    if (commonPasswords.includes(pwd)) {
        suggestions.push("Avoid using very common passwords like '123456' or 'password'.");
    } else {
        score += 1;
    }

    if (pwd.length >= 8) {
        score += 1;
    } else {
        suggestions.push("Make it at least 8 characters long.");
    }

    if (/[A-Z]/.test(pwd)) score += 1;
    else suggestions.push("Include at least one uppercase letter (A-Z).");

    if (/[a-z]/.test(pwd)) score += 1;
    else suggestions.push("Include at least one lowercase letter (a-z).");

    if (/[0-9]/.test(pwd)) score += 1;
    else suggestions.push("Include at least one number (0-9).");

    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1;
    else suggestions.push("Include at least one special character (e.g., !, @, #, $).");

    let strengthLevel = '';
    let barColor = '';
    let barWidth = (score / 6) * 100;

    if (score <= 2) {
        strengthLevel = 'Weak';
        barColor = 'red';
    } else if (score <= 4) {
        strengthLevel = 'Medium';
        barColor = 'orange';
    } else {
        strengthLevel = 'Strong';
        barColor = 'green';
    }

    strengthBar.style.width = `${barWidth}%`;
    strengthBar.style.backgroundColor = barColor;
    strengthText.innerText = `Strength: ${strengthLevel}`;

    if (suggestions.length) {
        suggestionsEl.innerHTML = `<ul><li>${suggestions.join('</li><li>')}</li></ul>`;
    } else {
        suggestionsEl.innerHTML = "<p>Great job! Your password looks strong 👍</p>";
    }
}
