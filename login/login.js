function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert(`Welcome, ${username}!`);
    } else {
      alert('Please enter both username and password.');
    }
}

const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  togglePassword.classList.toggle('bi-eye-fill');
  togglePassword.classList.toggle('bi-eye-slash-fill');
});
  