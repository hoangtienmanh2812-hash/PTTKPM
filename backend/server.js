const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = "bookhub_secret";
const usersFile = path.join(__dirname, "users.json");

// ✅ Kiểm tra và tạo users.json nếu chưa tồn tại
function initUsersFile() {
  if (!fs.existsSync(usersFile)) {
    const defaultUsers = [
      {
        id: 1,
        name: "Admin",
        email: "admin@librai.com",
        password: bcrypt.hashSync("123", 8),
        role: "admin"
      },
      {
        id: 2,
        name: "Mạnh",
        email: "user@gmail.com",
        password: bcrypt.hashSync("123", 8),
        role: "user"
      }
    ];
    fs.writeFileSync(usersFile, JSON.stringify(defaultUsers, null, 2));
    console.log("✅ Created users.json with default users");
  }
}

// ✅ Đọc user từ file
function readUsers() {
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data);
}

// ✅ Ghi user vào file
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Thiếu thông tin đăng ký" });
  }

  const users = readUsers();

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "Email đã được sử dụng" });
  }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    password: bcrypt.hashSync(password, 8),
    role: "user"
  };

  users.push(newUser);
  writeUsers(users);

  console.log("✅ REGISTERED:", email);

  res.json({ message: "Đăng ký thành công" });
});
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // ✅ ĐỌC USER TỪ FILE JSON
  const users = readUsers();

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Sai email hoặc mật khẩu" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Sai email hoặc mật khẩu" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role
    }
  });
});
app.listen(3000, () => {
  initUsersFile();
  console.log("✅ Backend running at http://localhost:3000");
});