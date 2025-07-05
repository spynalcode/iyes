import { Header } from './components/header.js';
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

new App();