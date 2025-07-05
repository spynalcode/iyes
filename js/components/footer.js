export class Footer {
  constructor() {
    this.render();
  }
  
  render() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
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
          <p>&copy; ${new Date().getFullYear()} Iye Essentials. All rights reserved.</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(footer);
  }
}