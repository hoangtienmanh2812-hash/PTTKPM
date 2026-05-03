
// Check if user is logged in, redirect to login if not
// Uncomment the line below to enable login requirement
// if (localStorage.getItem("currentUser") === null) {
//   window.location.href = "login.html";
// }
// ✅ CHECK LOGIN (có backend)
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}
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
  },
  {
    id: 5,
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    price: 120000,
    description: "Tiểu thuyết cách mạng nổi tiếng của Việt Nam, phản ánh cuộc sống nông thôn và cuộc đấu tranh giải phóng.",
    rating: 4.6,
    reviews: 3800,
    pages: 256,
    year: "2021 - Tái bản",
    genre: "Văn học Việt Nam",
    isbn: "978-6043456789",
    available: true,
    category: "fiction",
    image: "../img/Thu-vien-so-1080x1080.jpeg"
  },
  {
    id: 6,
    title: "Chí Phèo",
    author: "Nam Cao",
    price: 75000,
    description: "Tác phẩm kinh điển của nền văn học Việt Nam, kể về nhân vật Chí Phèo độc đáo và đầy kịch tính.",
    rating: 4.5,
    reviews: 2900,
    pages: 180,
    year: "2022 - Tái bản",
    genre: "Văn học Việt Nam",
    isbn: "978-6043789012",
    available: true,
    category: "fiction",
    image: "../img/Screenshot 2026-04-28 230720.png"
  },
  {
    id: 7,
    title: "Dạy Con Trẻ",
    author: "Maria Montessori",
    price: 145000,
    description: "Phương pháp giáo dục Montessori nổi tiếng thế giới, rất phổ biến tại Việt Nam, hướng dẫn cha mẹ dạy con.",
    rating: 4.7,
    reviews: 4500,
    pages: 312,
    year: "2023 - Tái bản",
    genre: "Giáo dục",
    isbn: "978-6043234567",
    available: true,
    category: "knowledge",
    image: "../img/Screenshot 2026-04-28 230811.png"
  },
  {
    id: 8,
    title: "Thắng Lợi Từ Ý Chí",
    author: "Norman Vincent Peale",
    price: 125000,
    description: "Cuốn sách truyền cảm hứng về sức mạnh của suy nghĩ tích cực, giúp độc giả vượt qua những khó khăn.",
    rating: 4.6,
    reviews: 3400,
    pages: 298,
    year: "2022 - Tái bản",
    genre: "Phát triển bản thân",
    isbn: "978-6043567890",
    available: true,
    category: "psychology",
    image: "../img/tuoithodudoi.jpg"
  },
  {
    id: 9,
    title: "Sống Lại Từ Đầu",
    author: "Phạm Công Luận",
    price: 110000,
    description: "Hành trình tìm kiếm ý nghĩa cuộc sống và tái sinh của một chàng trai trẻ, rất được yêu thích tại Việt Nam.",
    rating: 4.4,
    reviews: 2600,
    pages: 245,
    year: "2020 - Tái bản",
    genre: "Kỹ năng sống",
    isbn: "978-6043901234",
    available: true,
    category: "knowledge",
    image: "../img/Screenshot 2026-04-28 230844.png"
  },
  {
    id: 10,
    title: "Thủy Tiên - Những Chuyện Tình",
    author: "Tô Hoài",
    price: 95000,
    description: "Tác phẩm văn học cổ điển Việt Nam, kể những câu chuyện tình yêu thanh bạch và đầy cảm xúc.",
    rating: 4.5,
    reviews: 2200,
    pages: 220,
    year: "2021 - Tái bản",
    genre: "Văn học Việt Nam",
    isbn: "978-6043345678",
    available: true,
    category: "fiction",
    image: "../img/Thu-vien-so-1080x1080.jpeg"
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
    const recentBookIds = getRecentlyViewed();
    
    if (recentBookIds.length === 0) {
      recentGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Chưa xem sách nào</p>';
    } else {
      recentBookIds.forEach(bookId => {
        const book = books.find(b => b.id === bookId);
        if (book) {
          createBookCard(book, recentGrid);
        }
      });
    }
  }
}

function getRecentlyViewed() {
  const recentBooks = localStorage.getItem('recentlyViewed');
  return recentBooks ? JSON.parse(recentBooks) : [];
}

function addToRecentlyViewed(bookId) {
  let recentBooks = getRecentlyViewed();
  
  // Remove if already exists to avoid duplicates
  recentBooks = recentBooks.filter(id => id !== bookId);
  
  // Add to beginning of array
  recentBooks.unshift(bookId);
  
  // Keep only last 10 viewed books
  recentBooks = recentBooks.slice(0, 10);
  
  localStorage.setItem('recentlyViewed', JSON.stringify(recentBooks));
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
  div.onclick = () => {
    addToRecentlyViewed(book.id);
    window.location.href = 'book-detail.html?id=' + book.id;
  };
  grid.appendChild(div);
}

function addToCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.includes(bookId)) {
    cart.push(bookId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert("Đã thêm vào giỏ hàng!");
  } else {
    alert("Sách đã có trong giỏ!");
  }
}

function toggleCartDropdown() {
  const cartDropdown = document.getElementById('cartDropdown');
  if (cartDropdown) {
    cartDropdown.classList.toggle('active');
  }
}

function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
  
  if (cartItems) {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="cart-empty">Giỏ hàng trống</div>';
      return;
    }
    
    cart.forEach(bookId => {
      const book = books.find(b => b.id === bookId);
      if (book) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <div class="cart-item-info">
            <div class="cart-item-title">${book.title}</div>
            <div class="cart-item-price">${book.price.toLocaleString()}₫</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${bookId})">Xóa</button>
        `;
        cartItems.appendChild(itemDiv);
      }
    });
  }
}

function removeFromCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(id => id !== bookId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  
  let total = 0;
  let cartInfo = "Các sách trong giỏ:\n";
  
  cart.forEach(bookId => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      cartInfo += `- ${book.title}: ${book.price.toLocaleString()}₫\n`;
      total += book.price;
    }
  });
  
  cartInfo += `\nTổng cộng: ${total.toLocaleString()}₫`;
  
  if (confirm(cartInfo + "\n\nXác nhận thanh toán?")) {
    alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm.");
    localStorage.removeItem("cart");
    updateCartDisplay();
    const cartDropdown = document.getElementById('cartDropdown');
    if (cartDropdown) {
      cartDropdown.classList.remove('active');
    }
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// Initialize cart display and close dropdown when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
  
  document.addEventListener('click', function(e) {
    const cartSection = document.querySelector('.cart-section');
    const cartDropdown = document.getElementById('cartDropdown');
    
    if (cartSection && cartDropdown && !cartSection.contains(e.target)) {
      cartDropdown.classList.remove('active');
    }
  });
});

loadBooks();