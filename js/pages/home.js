// export class HomePage {
//   constructor(cart) {
//     this.cart = cart;
//     this.products = {
//       bestSellers: [
//         {
//           id: 'bs-1',
//           name: 'Royal Oud Perfume',
//           price: 85,
//           image: './assets/images/products/perfume-1.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'bs-2',
//           name: 'Shea Butter Cream',
//           price: 32,
//           image: './assets/images/products/cream-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-3',
//           name: 'Luxury Face Serum',
//           price: 68,
//           image: './assets/images/products/lipserum.avif',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-4',
//           name: 'Velvet Lipstick',
//           price: 24,
//           image: './assets/images/products/lipstick-1.jpg',
//           category: 'makeup'
//         }
//       ],
//       skincare: [
//         {
//           id: 'sk-1',
//           name: 'Hydrating Moisturizer',
//           price: 45,
//           image: './assets/images/products/moisturizer-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-2',
//           name: 'Eye Cream',
//           price: 38,
//           image: './assets/images/products/eyecream-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-3',
//           name: 'Cleansing Oil',
//           price: 28,
//           image: './assets/images/products/cleansing-oil-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-4',
//           name: 'Night Mask',
//           price: 52,
//           image: './assets/images/products/mask-1.jpg',
//           category: 'skincare'
//         }
//       ],
//       makeup: [
//         {
//           id: 'mk-1',
//           name: 'Foundation',
//           price: 42,
//           image: './assets/images/products/foundation-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-2',
//           name: 'Mascara',
//           price: 26,
//           image: './assets/images/products/mascara-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-3',
//           name: 'Blush Palette',
//           price: 34,
//           image: './assets/images/products/blush-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-4',
//           name: 'Highlighter',
//           price: 28,
//           image: './assets/images/products/highlighter-1.jpg',
//           category: 'makeup'
//         }
//       ],
//       perfume: [
//         {
//           id: 'pf-1',
//           name: 'Floral Bouquet',
//           price: 78,
//           image: './assets/images/products/pf1.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-2',
//           name: 'Woody Essence',
//           price: 82,
//           image: './assets/images/products/pf2.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-3',
//           name: 'Citrus Splash',
//           price: 72,
//           image: './assets/images/products/p3.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-4',
//           name: 'Oriental Spice',
//           price: 88,
//           image: './assets/images/products/perfume-5.jpg',
//           category: 'perfume'
//         }
//       ]
//     };

//         Slideshow configuration
//     this.slides = [
//       './assets/images/products/bg1.jpg',
//       './assets/images/products/bg2.jpg',
//       './assets/images/products/bg3.jpg',
//       './assets/images/products/bg4.jpg',
//       './assets/images/products/bg5.jpg',
//       './assets/images/products/bg6.jpg'
//     ];
//     this.currentSlide = 0;
//     this.slideInterval = null;

//     this.render();
//     this.initSlideshow();
//     this.initAddToCartButtons();
    
 
//   }
  

  
//   render() {
//     const app = document.getElementById('app');
//     app.innerHTML = `
//       <section class="hero">
//         <div class="hero-content">
//           <h1 class="hero-title">Luxury Beauty & Perfume</h1>
//           <p class="hero-subtitle">Discover our premium collection of skincare and fragrances</p>
//           <a href="#" class="btn">Shop Now</a>
//         </div>
//       </section>
      
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Best Sellers</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.bestSellers)}
//           </div>
//         </div>
//       </section>
      
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Skincare</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.skincare)}
//           </div>
//         </div>
//       </section>
      
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Makeup</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.makeup)}
//           </div>
//         </div>
//       </section>
      
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Perfume</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.perfume)}
//           </div>
//         </div>
//       </section>
//     `;
    
//     this.initAddToCartButtons();
//   }
//       initSlideshow() {
//     const slideshow = document.querySelector('.hero-slideshow');
    
//     // Create slide elements
//     this.slides.forEach((slide, index) => {
//       const slideDiv = document.createElement('div');
//       slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
//       slideDiv.style.backgroundImage = `url(${slide})`;
//       slideshow.appendChild(slideDiv);
//     });

//     // Start slideshow with 2 second intervals
//     this.slideInterval = setInterval(() => {
//       this.changeSlide();
//     }, 2000);
//   }

//   changeSlide() {
//     const slides = document.querySelectorAll('.hero-slide');
//     if (slides.length === 0) return;

//     // Fade out current slide
//     slides[this.currentSlide].classList.remove('active');
    
//     // Move to next slide
//     this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    
//     // Fade in new slide
//     slides[this.currentSlide].classList.add('active');
//   }

  
//   renderProductCards(products) {
//     return products.map(product => `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}" class="product-image">
//         <div class="product-info">
//           <h3 class="product-title">${product.name}</h3>
//           <p class="product-price">$${product.price.toFixed(2)}</p>
//           <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
//         </div>
//       </div>
//     `).join('');
//   }
  
//   initAddToCartButtons() {
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const productId = e.target.dataset.id;
//         let product;
        
//         // Find the product in any category
//         for (const category in this.products) {
//           const found = this.products[category].find(p => p.id === productId);
//           if (found) {
//             product = found;
//             break;
//           }
//         }
        
//         if (product) {
//           this.cart.addItem(product);
//           e.target.textContent = 'Added!';
//           setTimeout(() => {
//             e.target.textContent = 'Add to Cart';
//           }, 1000);
//         }
//       });
//     });
//   }
//     destroy() {
//         if (this.slideInterval) {
//           clearInterval(this.slideInterval);
//         }
//       }
// }

// // js/pages/home.js
// export class HomePage {
//   constructor(cart) {
//     this.cart = cart;
//     this.products = {
//       bestSellers: [
//         {
//           id: 'bs-1',
//           name: 'Royal Oud Perfume',
//           price: 85,
//           image: './assets/products/perfume-1.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'bs-2',
//           name: 'Shea Butter Cream',
//           price: 32,
//           image: './assets/products/cream-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-3',
//           name: 'Luxury Face Serum',
//           price: 68,
//           image: './assets/products/serum-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-4',
//           name: 'Velvet Lipstick',
//           price: 24,
//           image: './assets/products/lipstick-1.jpg',
//           category: 'makeup'
//         }
//       ],
//       skincare: [
//         /* Your skincare products */
//       ],
//       makeup: [
//         /* Your makeup products */
//       ],
//       perfume: [
//         /* Your perfume products */
//       ]
//     };

//     // Slideshow configuration
//     this.slides = [
//       './assets/images/products/bg1.jpg',
//       './assets/images/products/bg2.jpg',
//       './assets/images/products/bg3.jpg',
//       './assets/images/products/bg4.jpg',
//       './assets/images/products/bg5.jpg',
//       './assets/images/products/bg6.jpg'
//     ];
//     this.currentSlide = 0;
//     this.slideInterval = null;

//     this.render();
//     this.initSlideshow();
//     this.initAddToCartButtons();
//   }

//   render() {
//     const app = document.getElementById('app');
//     app.innerHTML = `
//       <!-- Hero Section with Slideshow -->
//       <section class="hero">
//         <div class="hero-slideshow"></div>
//         <div class="hero-content">
//           <h1 class="hero-title">Luxury Beauty & Perfume</h1>
//           <p class="hero-subtitle">Discover our premium collection of skincare and fragrances</p>
//           <a href="#" class="btn">Shop Now</a>
//         </div>
//       </section>

//       <!-- Product Sections -->
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Best Sellers</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.bestSellers)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Skincare</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.skincare)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Makeup</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.makeup)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Perfume</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.perfume)}
//           </div>
//         </div>
//       </section>
//     `;
//   }

//   initSlideshow() {
//     const slideshow = document.querySelector('.hero-slideshow');
    
//     // Create slide elements
//     this.slides.forEach((slide, index) => {
//       const slideDiv = document.createElement('div');
//       slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
//       slideDiv.style.backgroundImage = `url(${slide})`;
//       slideshow.appendChild(slideDiv);
//     });

//     // Start slideshow with 2 second intervals
//     this.slideInterval = setInterval(() => {
//       this.changeSlide();
//     }, 2000);
//   }

//   changeSlide() {
//     const slides = document.querySelectorAll('.hero-slide');
//     if (slides.length === 0) return;

//     // Fade out current slide
//     slides[this.currentSlide].classList.remove('active');
    
//     // Move to next slide
//     this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    
//     // Fade in new slide
//     slides[this.currentSlide].classList.add('active');
//   }

//   renderProductCards(products) {
//     return products.map(product => `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}" class="product-image">
//         <div class="product-info">
//           <h3 class="product-title">${product.name}</h3>
//           <p class="product-price">$${product.price.toFixed(2)}</p>
//           <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
//         </div>
//       </div>
//     `).join('');
//   }

//   initAddToCartButtons() {
//     document.addEventListener('click', (e) => {
//       if (e.target.classList.contains('add-to-cart')) {
//         const productId = e.target.dataset.id;
//         let product;
        
//         // Find product in any category
//         for (const category in this.products) {
//           const found = this.products[category].find(p => p.id === productId);
//           if (found) {
//             product = found;
//             break;
//           }
//         }
        
//         if (product) {
//           this.cart.addItem(product);
//           e.target.textContent = 'Added!';
//           setTimeout(() => {
//             e.target.textContent = 'Add to Cart';
//           }, 1000);
//         }
//       }
//     });
//   }

//   // Clean up when instance is destroyed
//   destroy() {
//     if (this.slideInterval) {
//       clearInterval(this.slideInterval);
//     }
//   }
// }


















// export class HomePage {
//   constructor(cart) {
//     this.cart = cart;

    
//     this.products = {
//       bestSellers: [
//         {
//           id: 'bs-1',
//           name: 'valentino',
//           price: 5,
//           image: './assets/images/products/pf5.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'bs-2',
//           name: 'Shea Butter Cream',
//           price: 32,
//           image: './assets/images/products/sheabutter.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-3',
//           name: 'Luxury Face Serum',
//           price: 68,
//           image: './assets/images/products/lipserum.avif',
//           category: 'skincare'
//         },
//         {
//           id: 'bs-4',
//           name: 'cerave',
//           price: 5,
//           image: './assets/images/products/cerave.jpg',
//           category: 'makeup'
//         }
//       ],
//       skincare: [
//         {
//           id: 'sk-1',
//           name: 'Hydrating Moisturizer',
//           price: 45,
//           image: './assets/images/products/moisturizer-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-2',
//           name: 'Eye Cream',
//           price: 38,
//           image: './assets/images/products/eyecream-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-3',
//           name: 'Cleansing Oil',
//           price: 28,
//           image: './assets/images/products/cleansing-oil-1.jpg',
//           category: 'skincare'
//         },
//         {
//           id: 'sk-4',
//           name: 'Night Mask',
//           price: 52,
//           image: './assets/images/products/mask-1.jpg',
//           category: 'skincare'
//         }
//       ],
//       makeup: [
//         {
//           id: 'mk-1',
//           name: 'Foundation',
//           price: 42,
//           image: './assets/images/products/foundation-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-2',
//           name: 'Mascara',
//           price: 26,
//           image: './assets/images/products/mascara-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-3',
//           name: 'Blush Palette',
//           price: 34,
//           image: './assets/images/products/blush-1.jpg',
//           category: 'makeup'
//         },
//         {
//           id: 'mk-4',
//           name: 'Highlighter',
//           price: 28,
//           image: './assets/images/products/highlighter-1.jpg',
//           category: 'makeup'
//         }
//       ],
//       perfume: [
//         {
//           id: 'pf-1',
//           name: 'Floral Bouquet',
//           price: 78,
//           image: './assets/images/products/pf1.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-2',
//           name: 'Woody Essence',
//           price: 82,
//           image: './assets/images/products/pf2.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-3',
//           name: 'Citrus Splash',
//           price: 72,
//           image: './assets/images/products/pf3.jpg',
//           category: 'perfume'
//         },
//         {
//           id: 'pf-4',
//           name: 'Oriental Spice',
//           price: 88,
//           image: './assets/images/products/perfume-5.jpg',
//           category: 'perfume'
//         }
//       ]
//     };

//     // Slideshow configuration
//     this.slides = [
//       './assets/images/products/bg1.jpg',
//       './assets/images/products/bg2.jpg',
//       './assets/images/products/bg3.jpg',
//       './assets/images/products/bg4.jpg',
//       './assets/images/products/bg5.jpg',
//       './assets/images/products/bg6.jpg',
//       './assets/images/products/bg7.jpg',
//       './assets/images/products/bg8.jpg',

//     ];
//     this.currentSlide = 0;
//     this.slideInterval = null;

      
//     // Add search event listener
//     document.addEventListener('searchProducts', (e) => {
//       this.showSearchResults(e.detail);
//     });


    

//     this.render();
//     this.initSlideshow();
//     this.initAddToCartButtons();
//   }

//   render() {
//     const app = document.getElementById('app');
//     app.innerHTML = `
//       <!-- Hero Section with Slideshow -->
//       <section class="hero">
//         <div class="hero-slideshow"></div>
//         <div class="hero-content">
//           <h1 class="hero-title">Luxury Beauty & Perfume</h1>
//           <p class="hero-subtitle">Discover our premium collection of skincare and fragrances</p>
//           <a href="#" class="btn">Shop Now</a>
//         </div>
//       </section>

//       <!-- Product Sections -->
//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Best Sellers</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.bestSellers)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Skincare</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.skincare)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Makeup</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.makeup)}
//           </div>
//         </div>
//       </section>

//       <section class="section">
//         <div class="container">
//           <h2 class="section-title">Perfume</h2>
//           <div class="product-grid">
//             ${this.renderProductCards(this.products.perfume)}
//           </div>
//         </div>
//       </section>
//     `;
//   }

//   initSlideshow() {
//     const slideshow = document.querySelector('.hero-slideshow');
    
//     // Create slide elements
//     this.slides.forEach((slide, index) => {
//       const slideDiv = document.createElement('div');
//       slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
//       slideDiv.style.backgroundImage = `url(${slide})`;
//       slideshow.appendChild(slideDiv);
//     });

//     // Start slideshow with 2 second intervals
//     this.slideInterval = setInterval(() => {
//       this.changeSlide();
//     }, 4000);
//   }

//   changeSlide() {
//     const slides = document.querySelectorAll('.hero-slide');
//     if (slides.length === 0) return;

//     // Fade out current slide
//     slides[this.currentSlide].classList.remove('active');
    
//     // Move to next slide
//     this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    
//     // Fade in new slide
//     slides[this.currentSlide].classList.add('active');
//   }

//   renderProductCards(products) {
//     return products.map(product => `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.name}" class="product-image">
//         <div class="product-info">
//           <h3 class="product-title">${product.name}</h3>
//           <p class="product-price">$${product.price.toFixed(2)}</p>
//           <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
//         </div>
//       </div>
//     `).join('');
//   }

//   initAddToCartButtons() {
//     document.addEventListener('click', (e) => {
//       if (e.target.classList.contains('add-to-cart')) {
//         const productId = e.target.dataset.id;
//         let product;
        
//         // Find product in any category
//         for (const category in this.products) {
//           const found = this.products[category].find(p => p.id === productId);
//           if (found) {
//             product = found;
//             break;
//           }
//         }
        
//         if (product) {
//           this.cart.addItem(product);
//           e.target.textContent = 'Added!';
//           setTimeout(() => {
//             e.target.textContent = 'Add to Cart';
//           }, 1000);
//         }
//       }
//     });
//   }

//   destroy() {
//     if (this.slideInterval) {
//       clearInterval(this.slideInterval);
//     }
//   }

  
// }



export class HomePage {
  constructor(cart) {
    this.cart = cart;
    this.allProducts = []; // Will hold all products for search
    this.products = {
      bestSellers: [
        {
          id: 'bs-1',
          name: 'valentino',
          price: 5,
          image: './assets/images/products/valentino.jpeg',
          category: 'perfume'
        },
        {
          id: 'bs-2',
          name: 'Shea Butter Cream',
          price: 32,
          image: './assets/images/products/sheabutter.jpg',
          category: 'skincare'
        },
        {
          id: 'bs-3',
          name: 'Luxury Face Serum',
          price: 68,
          image: './assets/images/products/lipserum.avif',
          category: 'skincare'
        },
        {
          id: 'bs-4',
          name: 'cerave',
          price: 5,
          image: './assets/images/products/cerave.jpg',
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
          name: 'Initio',
          price: 78,
          image: './assets/images/products/initio.jpeg',
          category: 'perfume'
        },
        {
          id: 'pf-2',
          name: 'Tomford Rose Exposed',
          price: 82,
          image: './assets/images/products/tomford.jpg',
          category: 'perfume'
        },
        {
          id: 'pf-3',
          name: 'Citrus S',
          price: 72,
          image: './assets/images/products/pf3.jpg',
          category: 'perfume'
        },
        {
          id: 'pf-4',
          name: 'Maison Oud Fair Mont Treasure EDP 100ml',
          price: 88,
          image: './assets/images/products/mason.jpeg',
          category: 'perfume'
        }
      ]
    };

    // Flatten all products for search
    this.allProducts = Object.values(this.products).flat();

    // Slideshow configuration
    this.slides = [
      './assets/images/products/bg1.jpg',
      './assets/images/products/bg2.jpg',
      './assets/images/products/bg3.jpg',
      './assets/images/products/bg4.jpg',
      './assets/images/products/bg5.jpg',
      './assets/images/products/bg6.jpg',
      './assets/images/products/bg7.jpg',
      './assets/images/products/bg8.jpg'
    ];
    this.currentSlide = 0;
    this.slideInterval = null;

    // Add search event listener
    document.addEventListener('searchProducts', (e) => {
      this.showSearchResults(e.detail);
    });

    this.render();
    this.initSlideshow();
    this.initAddToCartButtons();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <!-- Hero Section with Slideshow -->
      <section class="hero">
        <div class="hero-slideshow"></div>
        <div class="hero-content">
          <h1 class="hero-title">Luxury Beauty & Perfume</h1>
          <p class="hero-subtitle">Discover our premium collection of skincare and fragrances</p>
          <a href="#" class="btn">Shop Now</a>
        </div>
      </section>

      <!-- Product Sections -->
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

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        const searchResults = document.querySelector('.search-results');
        if (searchResults) searchResults.style.display = 'none';
      }
    });
  }

  initSlideshow() {
    const slideshow = document.querySelector('.hero-slideshow');
    
    // Create slide elements
    this.slides.forEach((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = `hero-slide ${index === 0 ? 'active' : ''}`;
      slideDiv.style.backgroundImage = `url(${slide})`;
      slideshow.appendChild(slideDiv);
    });

    // Start slideshow with 4 second intervals
    this.slideInterval = setInterval(() => {
      this.changeSlide();
    }, 4000);
  }

  changeSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    // Fade out current slide
    slides[this.currentSlide].classList.remove('active');
    
    // Move to next slide
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    
    // Fade in new slide
    slides[this.currentSlide].classList.add('active');
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
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.dataset.id;
        const product = this.allProducts.find(p => p.id === productId);
        
        if (product) {
          this.cart.addItem(product);
          e.target.textContent = 'Added!';
          setTimeout(() => {
            e.target.textContent = 'Add to Cart';
          }, 1000);
        }
      }
    });
  }

  showSearchResults(query) {
    const searchResults = document.querySelector('.search-results');
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matchingProducts = this.allProducts.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );

    if (matchingProducts.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No products found</div>';
    } else {
      searchResults.innerHTML = matchingProducts.map(product => `
        <div class="search-result-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h4>${product.name}</h4>
            <p>$${product.price.toFixed(2)}</p>
          </div>
        </div>
      `).join('');
    }

    searchResults.style.display = 'block';

    // Add click handlers to search results
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = item.dataset.id;
        const product = this.allProducts.find(p => p.id === productId);
        if (product) {
          this.cart.addItem(product);
          item.innerHTML += '<span class="added-notice">Added!</span>';
          setTimeout(() => {
            searchResults.style.display = 'none';
          }, 1000);
        }
      });
    });
  }

  destroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}

