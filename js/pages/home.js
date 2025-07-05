export class HomePage {
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
    app.innerHTML = `
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
            ${this.renderProductCards(this.products.bestSellers)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Skincare</h2>
          <div class="product-grid">
            ${this.renderProductCards(this.products.skincare)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Makeup</h2>
          <div class="product-grid">
            ${this.renderProductCards(this.products.makeup)}
          </div>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title">Perfume</h2>
          <div class="product-grid">
            ${this.renderProductCards(this.products.perfume)}
          </div>
        </div>
      </section>
    `;
    
    this.initAddToCartButtons();
  }
  
  renderProductCards(products) {
    return products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');
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
}