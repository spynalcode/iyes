export class Cart {
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
    this.cartModal.innerHTML = `
      <div class="cart-header">
        <h3 class="cart-title">Your Cart (${this.getTotalItems()})</h3>
        <button class="close-cart">&times;</button>
      </div>
      
      <div class="cart-items">
        ${this.items.length > 0 
          ? this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
              <img src="${item.image}" alt="${item.name}" class="cart-item-img">
              <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                  <button class="quantity-btn minus">-</button>
                  <span>${item.quantity}</span>
                  <button class="quantity-btn plus">+</button>
                </div>
                <button class="remove-item">Remove</button>
              </div>
            </div>
          `).join('')
          : '<p>Your cart is empty</p>'
        }
      </div>
      
      ${this.items.length > 0 ? `
        <div class="cart-total">
          <span>Total:</span>
          <span>$${this.getTotalPrice().toFixed(2)}</span>
        </div>
        <a href="/checkout" class="btn checkout-btn">Proceed to Checkout</a>
      ` : ''}
    `;
    
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
}