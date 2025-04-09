function login() {
  // Ambil nilai input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Tetapkan username dan password yang benar
  const validUsername = "admin";
  const validPassword = "12345";

  // Cek apakah cocok
  if (username === validUsername && password === validPassword) {
    // Arahkan ke halaman tertentu jika login berhasil
    window.location.href = "dashboard/datatamu.html"; // ganti dengan halaman tujuanmu
  } else {
    // Tampilkan alert jika login gagal
    alert("Username atau password salah!");
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
  