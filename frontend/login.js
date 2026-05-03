function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");

  if (email === "" || password === "") {
    errorDiv.innerText = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("currentUser", data.user.name);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userRole", data.user.role);
        window.location.href = "home.html";
      } else {
        errorDiv.innerText = data.message || "Đăng nhập thất bại";
      }
    })
    .catch(err => {
      errorDiv.innerText = "Lỗi kết nối: " + err.message;
      console.error("Login error:", err);
    });
}
