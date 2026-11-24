import React, { useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import products from './data/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState('');

  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  }

  return (
    <div className="app">
      <header className="site-header">
        <div>
          <p className="eyebrow">DCIT26 · APPLICATION DEVELOPMENT</p>
          <h1>CvSU Mini Store</h1>
          <p className="header-description">
            A simple product catalog built with React components and props.
          </p>
        </div>
        <div className="cart-summary" aria-live="polite">
          <span className="cart-icon">🛒</span>
          <div>
            <strong>{cartCount} {cartCount === 1 ? 'item' : 'items'}</strong>
            <small>in your cart</small>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="cart-message" aria-live="polite">
          {cartCount === 0 ? (
            <p><strong>Your cart is empty.</strong> Add an available product to get started.</p>
          ) : (
            <p>
              <strong>Items added to cart: {cartCount}</strong>
              {' '}(Last added: <strong>{lastAdded}</strong>)
            </p>
          )}
        </section>

        <div className="section-heading">
          <div>
            <p className="eyebrow">BROWSE OUR ITEMS</p>
            <h2>Product Catalog</h2>
          </div>
          <span className="product-count">{products.length} products</span>
        </div>

        <section className="product-grid" aria-label="Product catalog">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span>New</span>}
              {product.id === 5 && <span>Popular</span>}
            </ProductCard>
          ))}
        </section>
      </main>

      <footer>
        <p>© 2026 CvSU Mini Store · Laboratory Exercise 3</p>
      </footer>
    </div>
  );
}

export default App;
