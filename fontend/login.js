// ===== DANH SÁCH USER GIẢ LẬP =====
const users = [
  {
    email: "admin@librai.com",
    password: "123",
    role: "admin",
    name: "Admin"
  },
  {
    email: "user@gmail.com",
    password: "123",
    role: "user",
    name: "Mạnh"
  }
];

// ===== HÀM ĐĂNG NHẬP =====
function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");

  if (email === "" || pass === "") {
    errorDiv.innerText = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  const user = users.find(
    u => u.email === email && u.password === pass
  );

  if (user) {
    // Lưu thông tin đăng nhập
    localStorage.setItem("currentUser", user.name);
    localStorage.setItem("userRole", user.role);

    // Điều hướng theo role (mở rộng sau)
    window.location.href = "home.html";
  } else {
    errorDiv.innerText = "Email hoặc mật khẩu không chính xác";
  }
}

// ===== HÀM ĐĂNG XUẤT =====
function logout(event) {
  event.preventDefault();
  localStorage.removeItem("currentUser");
  localStorage.removeItem("userRole");
  
  // Reload page to update UI
  window.location.href = "home.html";
}