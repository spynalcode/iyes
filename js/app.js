import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { HomePage } from './pages/home.js';
import { Cart } from './components/cart.js';

// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar will render automatically from HTML
  console.log('Website loaded!');
});
class App {
  constructor() {
    this.cart = new Cart();
    new Header(this.cart);
    new Footer();
    new HomePage(this.cart);
  }
}

new App();