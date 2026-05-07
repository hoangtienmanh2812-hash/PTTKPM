
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

function addToCart(bookId, quantity = 1) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  
  // Chuyển từ mảng cũ sang object nếu cần
  if (Array.isArray(cart)) {
    const oldCart = cart;
    cart = {};
    oldCart.forEach(id => {
      cart[id] = 1;
    });
  }

  if (cart[bookId]) {
    cart[bookId] += quantity;
  } else {
    cart[bookId] = quantity;
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
  
  // Thông báo thành công
  const book = books.find(b => b.id === bookId);
  if (book) {
    showNotification(`Đã thêm "${book.title}" vào giỏ hàng!`);
  }
}

function toggleCartDropdown() {
  const cartDropdown = document.getElementById('cartDropdown');
  if (cartDropdown) {
    cartDropdown.classList.toggle('active');
  }
}

function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  
  // Chuyển đổi nếu là mảng cũ
  if (Array.isArray(cart)) {
    const newCart = {};
    cart.forEach(id => {
      newCart[id] = 1;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.querySelector('.cart-footer');
  
  let totalItems = 0;
  let totalPrice = 0;
  
  // Tính tổng số lượng và giá
  Object.keys(cart).forEach(bookId => {
    const quantity = cart[bookId] || 1;
    totalItems += quantity;
    const book = books.find(b => b.id == bookId);
    if (book) {
      totalPrice += book.price * quantity;
    }
  });
  
  // Cập nhật số lượng giỏ hàng
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
  
  // Render các item trong giỏ
  if (cartItems) {
    cartItems.innerHTML = '';
    
    if (Object.keys(cart).length === 0) {
      cartItems.innerHTML = '<div class="cart-empty">Giỏ hàng trống</div>';
      if (cartFooter) {
        cartFooter.innerHTML = `
          <div style="text-align: center; width: 100%; color: #999;">
            <p style="margin: 0;">Hãy thêm sách vào giỏ hàng</p>
          </div>
        `;
      }
      return;
    }
    
    Object.keys(cart).forEach(bookId => {
      const book = books.find(b => b.id == bookId);
      if (book) {
        const quantity = cart[bookId] || 1;
        const subtotal = book.price * quantity;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <div class="cart-item-content">
            <div class="cart-item-header">
              <div class="cart-item-title">${book.title}</div>
              <button class="cart-item-remove" onclick="removeFromCart(${bookId})" title="Xóa">✕</button>
            </div>
            <div class="cart-item-details">
              <div class="cart-item-price">${book.price.toLocaleString()}₫</div>
              <div class="cart-item-quantity">
                <button onclick="decreaseQuantity(${bookId})" class="qty-btn qty-minus">−</button>
                <span class="qty-value">${quantity}</span>
                <button onclick="increaseQuantity(${bookId})" class="qty-btn qty-plus">+</button>
              </div>
              <div class="cart-item-subtotal">${subtotal.toLocaleString()}₫</div>
            </div>
          </div>
        `;
        cartItems.appendChild(itemDiv);
      }
    });
    
    // Update cart footer with total
    if (cartFooter) {
      cartFooter.innerHTML = `
        <div class="cart-summary">
          <div class="summary-line">
            <span>Số lượng:</span>
            <span class="summary-value">${totalItems} sách</span>
          </div>
          <div class="summary-line total">
            <span>Tổng cộng:</span>
            <span class="summary-value">${totalPrice.toLocaleString()}₫</span>
          </div>
        </div>
        <button class="btn-checkout" onclick="checkout()">Thanh toán</button>
      `;
    }
  }
}

function increaseQuantity(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (cart[bookId]) {
    cart[bookId] += 1;
  } else {
    cart[bookId] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function decreaseQuantity(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (cart[bookId] && cart[bookId] > 1) {
    cart[bookId] -= 1;
  } else {
    delete cart[bookId];
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function removeFromCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  delete cart[bookId];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
  showNotification("Đã xóa khỏi giỏ hàng");
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (Object.keys(cart).length === 0) {
    showNotification("Giỏ hàng trống!");
    return;
  }

  const cartList = [];
  let total = 0;

  Object.keys(cart).forEach((bookId, index) => {
    const book = books.find(b => b.id == bookId);
    if (book) {
      const quantity = cart[bookId] || 1;
      const subtotal = book.price * quantity;
      cartList.push({
        index: index + 1,
        title: book.title,
        quantity,
        price: book.price,
        subtotal,
      });
      total += subtotal;
    }
  });

  openCheckoutModal(cartList, total);
}

function openCheckoutModal(items, total) {
  createCheckoutModal();
  const modal = document.getElementById('checkoutModal');
  const cartPanel = document.getElementById('checkoutCartPanel');
  const totalValue = document.getElementById('checkoutTotalValue');

  if (!modal || !cartPanel || !totalValue) {
    return;
  }

  if (items.length === 0) {
    cartPanel.innerHTML = '<div class="checkout-empty">Giỏ sách đang rỗng</div>';
  } else {
    cartPanel.innerHTML = items.map(item => `
      <div class="checkout-item">
        <div class="checkout-item-index">${item.index}</div>
        <div class="checkout-item-info">
          <div class="checkout-item-title">${item.title}</div>
          <div class="checkout-item-meta">${item.price.toLocaleString()}₫ × ${item.quantity}</div>
        </div>
        <div class="checkout-item-subtotal">${item.subtotal.toLocaleString()}₫</div>
      </div>
    `).join('');
  }

  totalValue.textContent = total.toLocaleString() + '₫';
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function hideCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function completeCheckout() {
  localStorage.removeItem('cart');
  updateCartDisplay();
  hideCheckoutModal();
  const cartDropdown = document.getElementById('cartDropdown');
  if (cartDropdown) {
    cartDropdown.classList.remove('active');
  }
  showNotification('✅ Thanh toán thành công! Cảm ơn bạn đã mua sắm.');
}

// Hàm thông báo
function showNotification(message) {
  // Tạo phần tử thông báo
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    document.body.appendChild(notification);
  }
  
  notification.textContent = message;
  notification.style.display = 'block';
  
  // Ẩn sau 3 giây
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// Initialize cart display and close dropdown when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  createCheckoutModal();
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

function createCheckoutModal() {
  if (document.getElementById('checkoutModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'checkoutModal';
  modal.className = 'modal-overlay';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkoutModalTitle">
      <div class="checkout-header">
        <div>
          <h2 id="checkoutModalTitle">Phiếu mượn</h2>
          <p>Kiểm tra giỏ hàng và hoàn tất thanh toán</p>
        </div>
        <button class="modal-close" onclick="hideCheckoutModal()" aria-label="Đóng">✕</button>
      </div>
      <div class="checkout-tabs">
        <button class="checkout-tab active" data-tab="cart" onclick="switchCheckoutTab(event)">Giỏ sách</button>
        <button class="checkout-tab" data-tab="loan" onclick="switchCheckoutTab(event)">Phiếu mượn</button>
      </div>
      <div class="checkout-body">
        <div class="checkout-panel active" id="checkoutCartPanel"></div>
        <div class="checkout-panel" id="checkoutLoanPanel">
          <div class="checkout-empty">Chức năng phiếu mượn sẽ sớm có.</div>
        </div>
      </div>
      <div class="checkout-footer">
        <div class="checkout-summary">
          <span>Tổng cộng:</span>
          <strong id="checkoutTotalValue">0₫</strong>
        </div>
        <button class="btn-confirm-checkout" onclick="completeCheckout()">Xác nhận thanh toán</button>
      </div>
    </div>
  `;

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      hideCheckoutModal();
    }
  });

  document.body.appendChild(modal);
}

function switchCheckoutTab(event) {
  const selectedTab = event.currentTarget;
  const tabName = selectedTab.dataset.tab;
  document.querySelectorAll('.checkout-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.checkout-panel').forEach(panel => panel.classList.remove('active'));
  selectedTab.classList.add('active');
  document.getElementById(`checkout${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Panel`).classList.add('active');
}
