const fs = require('fs');
const path = require('path');

const structure = {
  // Configuration files
  '.gitignore': `node_modules/
dist/
.DS_Store
.env`,
  'vercel.json': `{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    },
    {
      "src": "js/**",
      "use": "@vercel/static"
    },
    {
      "src": "css/**",
      "use": "@vercel/static"
    },
    {
      "src": "assets/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/checkout",
      "dest": "/checkout.html"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}`,
  'package.json': `{
  "name": "iye-essentials",
  "version": "1.0.0",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  }
}`,

  // HTML Files
  'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iye Essentials | Luxury Perfume & Skincare</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/variables.css">
  <link rel="stylesheet" href="./css/base.css">
  <link rel="stylesheet" href="./css/components/header.css">
  <link rel="stylesheet" href="./css/components/footer.css">
  <link rel="stylesheet" href="./css/components/cart-modal.css">
  <link rel="stylesheet" href="./css/pages/home.css">
  <link rel="stylesheet" href="./css/pages/checkout.css">
  <link rel="icon" href="./assets/images/global/favicon.ico">
</head>
<body>
  <div id="app"></div>
  <div id="cart-modal" class="cart-modal"></div>
  <script type="module" src="./js/app.js"></script>
</body>
</html>`,

  'checkout.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checkout | Iye Essentials</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/variables.css">
  <link rel="stylesheet" href="./css/base.css">
  <link rel="stylesheet" href="./css/components/header.css">
  <link rel="stylesheet" href="./css/components/footer.css">
  <link rel="stylesheet" href="./css/pages/checkout.css">
</head>
<body>
  <div id="checkout-app"></div>
  <script type="module" src="./js/pages/checkout.js"></script>
</body>
</html>`,

  // CSS Files
  'css/reset.css': `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Arial', sans-serif; line-height: 1.6; }
img { max-width: 100%; height: auto; }`,

  'css/variables.css': `:root {
  --color-primary: #8e6c88;
  --color-primary-dark: #6a4c6a;
  --color-secondary: #333;
  --color-accent: #d4af8e;
  --color-light: #f9f5f0;
  --color-white: #ffffff;
  --color-gray: #e5e5e5;
  --font-main: 'Playfair Display', serif;
  --font-secondary: 'Montserrat', sans-serif;
  --transition: all 0.3s ease;
}`,

  'css/base.css': `body {
  font-family: var(--font-secondary);
  color: var(--color-secondary);
  background-color: var(--color-light);
}

h1, h2, h3, h4 {
  font-family: var(--font-main);
  font-weight: 500;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--color-primary-dark);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-secondary);
  font-weight: 500;
}

.btn:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-white);
}`,

  'css/components/header.css': `.header {
  background-color: var(--color-white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  height: 40px;
}

.nav-main {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--color-secondary);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cart-btn {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-main {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
}`,

  'css/components/footer.css': `.footer {
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  color: var(--color-white);
  margin-bottom: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links {
  list-style: none;
}

.footer-link {
  margin-bottom: 0.75rem;
}

.footer-link a {
  color: var(--color-gray);
  font-size: 0.875rem;
}

.footer-link a:hover {
  color: var(--color-white);
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-gray);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: var(--color-white);
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}`,

  'css/components/cart-modal.css': `.cart-modal {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100%;
  background-color: var(--color-white);
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  z-index: 2000;
  transition: right 0.3s ease;
  padding: 1.5rem;
  overflow-y: auto;
}

.cart-modal.open {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray);
}

.cart-title {
  font-size: 1.25rem;
  font-weight: 500;
}

.close-cart {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.cart-items {
  margin-bottom: 1.5rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray);
}

.cart-item-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.cart-item-price {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-btn {
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-gray);
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-item {
  color: #ff0000;
  font-size: 0.875rem;
  cursor: pointer;
}

.cart-total {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-gray);
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.125rem;
}

.checkout-btn {
  width: 100%;
  margin-top: 1.5rem;
}

@media (max-width: 480px) {
  .cart-modal {
    width: 100%;
  }
}`,

  'css/pages/home.css': `.hero {
  height: 80vh;
  min-height: 500px;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('../assets/images/hero/hero-banner.jpg') center/cover;
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 3rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-family: var(--font-secondary);
}

.section {
  padding: 3rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 2px;
  background-color: var(--color-primary);
  margin: 1rem auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.product-card {
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.product-price {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.add-to-cart {
  width: 100%;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
}`,

  'css/pages/checkout.css': `.checkout {
  padding: 3rem 0;
}

.checkout-container {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
}

.checkout-summary {
  background-color: var(--color-white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.checkout-title {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  font-family: var(--font-secondary);
}

.order-summary {
  background-color: var(--color-white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 1rem;
}

.order-title {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gray);
}

.order-items {
  margin-bottom: 1.5rem;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.order-total {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-gray);
  font-weight: 500;
  font-size: 1.125rem;
}

.place-order-btn {
  width: 100%;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }
  
  .order-summary {
    position: static;
  }
}`,

  // JavaScript Files
  'js/app.js': `import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { HomePage } from './pages/home.js';
import { Cart } from './components/cart.js';

class App {
  constructor() {
    this.cart = new Cart();
    new Header(this.cart);
    new Footer();
    new HomePage(this.cart);
  }
}

new App();`,

  'js/components/header.js': `export class Header {
  constructor(cart) {
    this.cart = cart;
    this.render();
    this.initEventListeners();
  }
  
  render() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = \`
      <div class="container header-container">
        <a href="/" class="logo-link">
          <img src="./assets/images/global/logo.svg" alt="Iye Essentials" class="logo">
        </a>
        
        <nav class="nav-main">
          <ul class="nav-list">
            <li class="nav-item"><a href="#" class="nav-link">Best Sellers</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Skincare</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Makeup</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Perfume</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Gifts & Sets</a></li>
            <li class="nav-item"><a href="#" class="nav-link">New</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Special Offers</a></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <button class="cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-count">\${this.cart.getTotalItems()}</span>
          </button>
          
          <button class="mobile-menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    \`;
    
    document.body.prepend(header);
  }
  
  initEventListeners() {
    document.querySelector('.cart-btn').addEventListener('click', () => {
      this.cart.toggleCart();
    });
    
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
      document.querySelector('.nav-main').classList.toggle('show');
    });
  }
}`,

  'js/components/footer.js': `export class Footer {
  constructor() {
    this.render();
  }
  
  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = \`
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-title">Shop</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">Best Sellers</a></li>
              <li class="footer-link"><a href="#">Skincare</a></li>
              <li class="footer-link"><a href="#">Makeup</a></li>
              <li class="footer-link"><a href="#">Perfume</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Help</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">Contact Us</a></li>
              <li class="footer-link"><a href="#">FAQs</a></li>
              <li class="footer-link"><a href="#">Shipping</a></li>
              <li class="footer-link"><a href="#">Returns</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">About</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">Our Story</a></li>
              <li class="footer-link"><a href="#">Sustainability</a></li>
              <li class="footer-link"><a href="#">Careers</a></li>
              <li class="footer-link"><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Connect</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">Instagram</a></li>
              <li class="footer-link"><a href="#">Facebook</a></li>
              <li class="footer-link"><a href="#">Twitter</a></li>
              <li class="footer-link"><a href="#">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; \${new Date().getFullYear()} Iye Essentials. All rights reserved.</p>
        </div>
      </div>
    \`;
    
    document.body.appendChild(footer);
  }
}`,

  'js/components/cart.js': `export class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('iye-cart')) || [];
    this.cartModal = document.getElementById('cart-modal');
    this.renderCartIcon();
    this.renderCartModal();
  }
  
  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    this.saveCart();
    this.renderCartIcon();
    this.renderCartModal();
  }
  
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
    this.renderCartIcon();
    this.renderCartModal();
  }
  
  updateQuantity(productId, newQuantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = newQuantity;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveCart();
        this.renderCartIcon();
        this.renderCartModal();
      }
    }
  }
  
  saveCart() {
    localStorage.setItem('iye-cart', JSON.stringify(this.items));
  }
  
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  renderCartIcon() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = this.getTotalItems();
    }
  }
  
  renderCartModal() {
    this.cartModal.innerHTML = \`
      <div class="cart-header">
        <h3 class="cart-title">Your Cart (\${this.getTotalItems()})</h3>
        <button class="close-cart">&times;</button>
      </div>
      
      <div class="cart-items">
        \${this.items.length > 0 
          ? this.items.map(item => \`
            <div class="cart-item" data-id="\${item.id}">
              <img src="\${item.image}" alt="\${item.name}" class="cart-item-img">
              <div class="cart-item-details">
                <h4 class="cart-item-name">\${item.name}</h4>
                <p class="cart-item-price">\$\${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                  <button class="quantity-btn minus">-</button>
                  <span>\${item.quantity}</span>
                  <button class="quantity-btn plus">+</button>
                </div>
                <button class="remove-item">Remove</button>
              </div>
            </div>
          \`).join('')
          : '<p>Your cart is empty</p>'
        }
      </div>
      
      \${this.items.length > 0 ? \`
        <div class="cart-total">
          <span>Total:</span>
          <span>\$\${this.getTotalPrice().toFixed(2)}</span>
        </div>
        <a href="/checkout" class="btn checkout-btn">Proceed to Checkout</a>
      \` : ''}
    \`;
    
    // Add event listeners
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.target.closest('.cart-item').dataset.id;
        const item = this.items.find(item => item.id === itemId);
        if (item) {
          this.updateQuantity(itemId, item.quantity - 1);
        }
      });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.target.closest('.cart-item').dataset.id;
        const item = this.items.find(item => item.id === itemId);
        if (item) {
          this.updateQuantity(itemId, item.quantity + 1);
        }
      });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.target.closest('.cart-item').dataset.id;
        this.removeItem(itemId);
      });
    });
    
    document.querySelector('.close-cart')?.addEventListener('click', () => {
      this.toggleCart(false);
    });
  }
  
  toggleCart(show = null) {
    if (show === null) {
      this.cartModal.classList.toggle('open');
    } else {
      show ? this.cartModal.classList.add('open') : this.cartModal.classList.remove('open');
    }
  }
}`,

  'js/pages/home.js': `export class HomePage {
  constructor(cart) {
    this.cart = cart;
    this.products = {
      bestSellers: [
        {
          id: 'bs-1',
          name: 'Royal Oud Perfume',
          price: 85,
          image: './assets/images/products/perfume-1.jpg',
          category: 'perfume'
        },
        {
          id: 'bs-2',
          name: 'Shea Butter Cream',
          price: 32,
          image: './assets/images/products/cream-1.jpg',
          category: 'skincare'
        },
        {
          id: 'bs-3',
          name: 'Luxury Face Serum',
          price: 68,
          image: './assets/images/products/serum-1.jpg',
          category: 'skincare'
        },
        {
          id: 'bs-4',
          name: 'Velvet Lipstick',
          price: 24,
          image: './assets/images/products/lipstick-1.jpg',
          category: 'makeup'
        }
      ],
      skincare: [
        {
          id: 'sk-1',
          name: 'Hydrating Moisturizer',
          price: 45,
          image: './assets/images/products/moisturizer-1.jpg',
          category: 'skincare'
        },
        {
          id: 'sk-2',
          name: 'Eye Cream',
          price: 38,
          image: './assets/images/products/eyecream-1.jpg',
          category: 'skincare'
        },
        {
          id: 'sk-3',
          name: 'Cleansing Oil',
          price: 28,
          image: './assets/images/products/cleansing-oil-1.jpg',
          category: 'skincare'
        },
        {
          id: 'sk-4',
          name: 'Night Mask',
          price: 52,
          image: './assets/images/products/mask-1.jpg',
          category: 'skincare'
        }
      ],
      makeup: [
        {
          id: 'mk-1',
          name: 'Foundation',
          price: 42,
          image: './assets/images/products/foundation-1.jpg',
          category: 'makeup'
        },
        {
          id: 'mk-2',
          name: 'Mascara',
          price: 26,
          image: './assets/images/products/mascara-1.jpg',
          category: 'makeup'
        },
        {
          id: 'mk-3',
          name: 'Blush Palette',
          price: 34,
          image: './assets/images/products/blush-1.jpg',
          category: 'makeup'
        },
        {
          id: 'mk-4',
          name: 'Highlighter',
          price: 28,
          image: './assets/images/products/highlighter-1.jpg',
          category: 'makeup'
        }
      ],
      perfume: [
        {
          id: 'pf-1',
          name: 'Floral Bouquet',
          price: 78,
          image: './assets/images/products/perfume-2.jpg',
          category: 'perfume'
        },
        {
          id: 'pf-2',
          name: 'Woody Essence',
          price: 82,
          image: './assets/images/products/perfume-3.jpg',
          category: 'perfume'
        },
        {
          id: 'pf-3',
          name: 'Citrus Splash',
          price: 72,
          image: './assets/images/products/perfume-4.jpg',
          category: 'perfume'
        },
        {
          id: 'pf-4',
          name: 'Oriental Spice',
          price: 88,
          image: './assets/images/products/perfume-5.jpg',
          category: 'perfume'
        }
      ]
    };
    
    this.render();
  }
  
  render() {
    const app = document.getElementById('app');
    app.innerHTML = \`
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Luxury Beauty & Perfume</h1>
          <p class="hero-subtitle">Discover our premium collection of skincare and fragrances</p>
          <a href="#" class="btn">Shop Now</a>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Best Sellers</h2>
          <div class="product-grid">
            \${this.renderProductCards(this.products.bestSellers)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Skincare</h2>
          <div class="product-grid">
            \${this.renderProductCards(this.products.skincare)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Makeup</h2>
          <div class="product-grid">
            \${this.renderProductCards(this.products.makeup)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Perfume</h2>
          <div class="product-grid">
            \${this.renderProductCards(this.products.perfume)}
          </div>
        </div>
      </section>
    \`;
    
    this.initAddToCartButtons();
  }
  
  renderProductCards(products) {
    return products.map(product => \`
      <div class="product-card">
        <img src="\${product.image}" alt="\${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">\${product.name}</h3>
          <p class="product-price">\$\${product.price.toFixed(2)}</p>
          <button class="btn add-to-cart" data-id="\${product.id}">Add to Cart</button>
        </div>
      </div>
    \`).join('');
  }
  
  initAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        let product;
        
        // Find the product in any category
        for (const category in this.products) {
          const found = this.products[category].find(p => p.id === productId);
          if (found) {
            product = found;
            break;
          }
        }
        
        if (product) {
          this.cart.addItem(product);
          e.target.textContent = 'Added!';
          setTimeout(() => {
            e.target.textContent = 'Add to Cart';
          }, 1000);
        }
      });
    });
  }
}`,

  'js/pages/checkout.js': `import { Cart } from '../components/cart.js';

class CheckoutPage {
  constructor() {
    this.cart = new Cart();
    this.render();
    this.initEventListeners();
  }
  
  render() {
    const checkoutApp = document.getElementById('checkout-app');
    checkoutApp.innerHTML = \`
      <div class="checkout">
        <div class="container">
          <h1>Checkout</h1>
          
          <div class="checkout-container">
            <div class="checkout-summary">
              <h2 class="checkout-title">Shipping Information</h2>
              
              <form id="checkout-form">
                <div class="form-group">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" id="name" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" id="address" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="city" class="form-label">City</label>
                  <input type="text" id="city" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="zip" class="form-label">ZIP Code</label>
                  <input type="text" id="zip" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="card" class="form-label">Card Number</label>
                  <input type="text" id="card" class="form-control" required>
                </div>
                
                <div class="form-group">
                  <label for="expiry" class="form-label">Expiry Date</label>
                  <input type="text" id="expiry" class="form-control" placeholder="MM/YY" required>
                </div>
                
                <div class="form-group">
                  <label for="cvv" class="form-label">CVV</label>
                  <input type="text" id="cvv" class="form-control" required>
                </div>
              </form>
            </div>
            
            <div class="order-summary">
              <h2 class="order-title">Order Summary</h2>
              
              <div class="order-items">
                \${this.cart.items.length > 0 
                  ? this.cart.items.map(item => \`
                    <div class="order-item">
                      <span>\${item.name} × \${item.quantity}</span>
                      <span>\$\${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  \`).join('')
                  : '<p>Your cart is empty</p>'
                }
              </div>
              
              <div class="order-total">
                <span>Total:</span>
                <span>\$\${this.cart.getTotalPrice().toFixed(2)}</span>
              </div>
              
              <button id="place-order" class="btn place-order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
  
  initEventListeners() {
    document.getElementById('place-order')?.addEventListener('click', () => {
      if (this.validateForm()) {
        alert('Order placed successfully!');
        localStorage.removeItem('iye-cart');
        window.location.href = '/';
      }
    });
  }
  
  validateForm() {
    const form = document.getElementById('checkout-form');
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = '';
      }
    });
    
    if (!isValid) {
      alert('Please fill in all required fields');
    }
    
    return isValid;
  }
}

new CheckoutPage();`,

  // Assets
  'assets/images/global/logo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <style>
    text {
      font-family: 'Playfair Display', serif;
      font-weight: 500;
      fill: #8e6c88;
    }
  </style>
  <text x="0" y="35" font-size="30">Iye Essentials</text>
</svg>`,

  'assets/images/global/favicon.ico': '', // Placeholder for favicon
  'assets/images/hero/hero-banner.jpg': '', // Placeholder for hero image
  'assets/images/products/perfume-1.jpg': '',
  'assets/images/products/cream-1.jpg': '',
  'assets/images/products/serum-1.jpg': '',
  'assets/images/products/lipstick-1.jpg': '',
  'assets/images/products/moisturizer-1.jpg': '',
  'assets/images/products/eyecream-1.jpg': '',
  'assets/images/products/cleansing-oil-1.jpg': '',
  'assets/images/products/mask-1.jpg': '',
  'assets/images/products/foundation-1.jpg': '',
  'assets/images/products/mascara-1.jpg': '',
  'assets/images/products/blush-1.jpg': '',
  'assets/images/products/highlighter-1.jpg': '',
  'assets/images/products/perfume-2.jpg': '',
  'assets/images/products/perfume-3.jpg': '',
  'assets/images/products/perfume-4.jpg': '',
  'assets/images/products/perfume-5.jpg': ''
};

// Create all files and folders
Object.entries(structure).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log(`Created: ${filePath}`);
});

console.log('\nIye Essentials project structure created successfully!');
console.log('\nNext steps:');
console.log('1. Add actual product images to assets/images/products/');
console.log('2. Add hero banner image to assets/images/hero/hero-banner.jpg');
console.log('3. Run "npm install" to install dependencies');
console.log('4. Run "npm start" to start development server');