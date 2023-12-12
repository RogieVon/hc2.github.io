const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
var loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email and password input values
    var emailInput = document.querySelector('.form-box.login input[type="email"]');
    var passwordInput = document.querySelector('.form-box.login input[type="password"]');
    
    // Check if both email and password are filled
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        // If both fields are filled, redirect to 'Store.html'
        window.location.href = 'Product.html';
    } else {
        // If not, you can display an error message or take appropriate action
        alert('Please fill in both email and password fields.');
    }
});

var registerButton = document.querySelector('.form-box.register button.btn');

registerButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username, email, and password input values
    var usernameInput = document.querySelector('.form-box.register input[type="text"]');
    var emailInput = document.querySelector('.form-box.register input[type="email"]');
    var passwordInput = document.querySelector('.form-box.register input[type="password"]');
    
    // Check if all fields are filled
    if (
        usernameInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' &&
        passwordInput.value.trim() !== ''
    ) {
        // If all fields are filled, redirect to login page
        wrapper.classList.remove('active'); // Switch to the login form
    } else {
        // If not, you can display an error message or take appropriate action
        alert('Please fill in all registration fields.');
    }
});