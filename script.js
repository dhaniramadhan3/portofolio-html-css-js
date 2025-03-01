document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginButton").addEventListener("click", function () {
    // Mendapatkan nilai input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Lakukan validasi (contoh sederhana)
    if (username === "admin" && password === "admin") {
      // Redirect ke halaman selanjutnya jika kredensial benar
      window.location.href = "next_page.html";
    } else {
      // Tampilkan pesan kesalahan jika kredensial salah
      alert("Invalid username or password. Please try again.");
    }
  });
});
