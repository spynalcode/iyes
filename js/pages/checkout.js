import { Cart } from '../components/cart.js';

class CheckoutPage {
  constructor() {
    this.cart = new Cart();
    this.render();
    this.initEventListeners();
  }
  
  render() {
    const checkoutApp = document.getElementById('checkout-app');
    checkoutApp.innerHTML = `
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
                ${this.cart.items.length > 0 
                  ? this.cart.items.map(item => `
                    <div class="order-item">
                      <span>${item.name} × ${item.quantity}</span>
                      <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  `).join('')
                  : '<p>Your cart is empty</p>'
                }
              </div>
              
              <div class="order-total">
                <span>Total:</span>
                <span>$${this.cart.getTotalPrice().toFixed(2)}</span>
              </div>
              
              <button id="place-order" class="btn place-order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    `;
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

new CheckoutPage();