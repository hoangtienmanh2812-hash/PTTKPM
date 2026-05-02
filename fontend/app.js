
// Check if user is logged in, redirect to login if not
// Uncomment the line below to enable login requirement
// if (localStorage.getItem("currentUser") === null) {
//   window.location.href = "login.html";
// }

const books = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 135000,
    description: "Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử, được hàng triệu độc giả Việt Nam yêu thích.",
    rating: 4.8,
    reviews: 4200,
    pages: 328,
    year: "2022 - Tái bản",
    genre: "Kỹ năng sống, Tâm lý",
    isbn: "978-6045881234",
    available: true,
    category: "psychology",
    image: "../img/Screenshot 2026-04-28 230720.png"
  },
  {
    id: 2,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    price: 98000,
    description: "Cuốn sách truyền cảm hứng mạnh mẽ cho giới trẻ Việt Nam về học tập, trải nghiệm và trưởng thành.",
    rating: 4.6,
    reviews: 3100,
    pages: 285,
    year: "2021 - Tái bản",
    genre: "Truyền cảm hứng",
    isbn: "978-6049027890",
    available: true,
    category: "knowledge",
    image: "../img/tuoithodudoi.jpg"
  },
  {
    id: 3,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 150000,
    description: "Tiểu thuyết nổi tiếng toàn cầu, rất được yêu thích tại Việt Nam với thông điệp theo đuổi ước mơ.",
    rating: 4.5,
    reviews: 5200,
    pages: 320,
    year: "2023 - Tái bản",
    genre: "Văn học",
    isbn: "978-6040012345",
    available: true,
    category: "fiction",
    image: "../img/Screenshot 2026-04-28 230811.png"
  },
  {
    id: 4,
    title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
    author: "Nguyễn Nhật Ánh",
    price: 89000,
    description: "Tác phẩm gắn liền với tuổi thơ của nhiều thế hệ độc giả Việt Nam.",
    rating: 4.7,
    reviews: 6100,
    pages: 208,
    year: "2020 - Tái bản",
    genre: "Văn học Việt Nam",
    isbn: "978-6042105678",
    available: true,
    category: "fiction",
    image: "../img/Screenshot 2026-04-28 230844.png"
  }
];

function loadBooks() {
  const grid = document.getElementById("bookGrid");
  const recentGrid = document.getElementById("recentGrid");
  
  if (grid) {
    grid.innerHTML = "";
    books.forEach(book => {
      createBookCard(book, grid);
    });
  }
  
  if (recentGrid) {
    recentGrid.innerHTML = "";
    const recentBooks = [...books].slice(0, 3);
    recentBooks.forEach(book => {
      createBookCard(book, recentGrid);
    });
  }
}

function createBookCard(book, grid) {
  const div = document.createElement("div");
  div.className = "book-card";
  div.innerHTML = `
    <div class="book-image">
      <img src="${book.image}">
    </div>
    <h4>${book.title}</h4>
    <p class="author">${book.author}</p>
    <div class="rating">⭐ ${book.rating} <span>(${book.reviews})</span></div>
  `;
  div.onclick = () => window.location.href = 'book-detail.html?id=' + book.id;
  grid.appendChild(div);
}

function addToCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.includes(bookId)) {
    cart.push(bookId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  } else {
    alert("Sách đã có trong giỏ!");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
loadBooks();