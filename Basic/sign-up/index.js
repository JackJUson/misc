const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    /* Prevents form from submmitting on event */
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
}