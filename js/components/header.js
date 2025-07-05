export class Header {
  constructor(cart) {
    this.cart = cart;
    this.render();
    this.initEventListeners();
  }
  
  render() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
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
            <span class="cart-count">${this.cart.getTotalItems()}</span>
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
    `;
    
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
}