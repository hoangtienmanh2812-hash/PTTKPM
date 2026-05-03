// ===== HÀM VALIDATE EMAIL =====
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===== HÀM VALIDATE PHONE =====
function isValidPhone(phone) {
  if (phone === "") return true; // Phone là tuỳ chọn
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone);
}

// ===== HÀM ĐĂNG KÝ =====
async function register() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const agreeTerms = document.getElementById("agreeTerms").checked;

  const errorDiv = document.getElementById("error");
  const successDiv = document.getElementById("success");

  // Clear previous messages
  errorDiv.innerText = "";
  successDiv.innerText = "";

  // ===== VALIDATION =====
  if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
    errorDiv.innerText = "Vui lòng điền đầy đủ thông tin bắt buộc";
    return;
  }

  if (fullname.length < 3) {
    errorDiv.innerText = "Họ và tên phải ít nhất 3 ký tự";
    return;
  }

  if (!isValidEmail(email)) {
    errorDiv.innerText = "Email không hợp lệ";
    return;
  }

  if (password.length < 6) {
    errorDiv.innerText = "Mật khẩu phải ít nhất 6 ký tự";
    return;
  }

  if (password !== confirmPassword) {
    errorDiv.innerText = "Mật khẩu xác nhận không khớp";
    return;
  }

  if (phone !== "" && !isValidPhone(phone)) {
    errorDiv.innerText = "Số điện thoại không hợp lệ (10-11 chữ số)";
    return;
  }

  if (!agreeTerms) {
    errorDiv.innerText = "Vui lòng đồng ý với Điều khoản sử dụng";
    return;
  }

  // ===== GỬI REQUEST ĐĂNG KÝ ĐẾN BACKEND =====
  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: fullname,
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      errorDiv.innerText = data.message || "Đăng ký thất bại";
      return;
    }

    // ===== HIỂN THỊ THÔNG BÁO THÀNH CÔNG =====
    successDiv.innerText = "Đăng ký thành công! Chuyển hướng đến trang đăng nhập...";
    
    // ===== RESET FORM =====
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("agreeTerms").checked = false;

    // ===== CHUYỂN HƯỚNG =====
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } catch (error) {
    errorDiv.innerText = "Lỗi kết nối: " + error.message;
    console.error("Register error:", error);
  }
}

// ===== HỖ TRỢ ENTER ĐỂ SUBMIT =====
document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll(".register-box input");
  inputs.forEach(input => {
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        register();
      }
    });
  });
});
