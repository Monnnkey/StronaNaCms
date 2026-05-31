const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    let errors = [];

    if (name.length < 2) {
        errors.push('Imię musi mieć co najmniej 2 znaki.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Podaj poprawny adres e-mail.');
    }

    if (password.length < 8) {
        errors.push('Hasło musi mieć co najmniej 8 znaków.');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Hasło musi zawierać co najmniej jedną wielką literę.');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Hasło musi zawierać co najmniej jedną cyfrę.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Rejestracja przebiegła pomyślnie!');
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.example.com/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({ name, email, password }));
});