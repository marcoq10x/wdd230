//form.js contains JavaScript code to validate the form on the contact page in the wdd230 Home Page.

//Form password validation
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const range = document.getElementById('page-rating');
    const rangeValue = document.getElementById('range-value');
    const form = document.querySelector('form');

    // Create a div for form messages
    const formMessage = document.createElement('div');
    formMessage.id = 'form-message';
    formMessage.style.color = 'red';
    formMessage.style.marginBottom = '10px';
    formMessage.style.display = 'none';

    // Insert the message div at the beginning of the form
    form.insertBefore(formMessage, form.firstChild);

    // Event listener for range input
    range.addEventListener('input', function() {
        rangeValue.textContent = range.value;
    });

    // Event listener for form submission
    form.addEventListener('submit', function(e) {
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            e.preventDefault(); // Prevent form submission
            formMessage.textContent = '❗Passwords DO NOT MATCH!';
            formMessage.style.display = 'block';
            password.value = '';
            confirmPassword.value = '';
            password.focus();
        } else {
            formMessage.style.display = 'none';
        }
    });
});
