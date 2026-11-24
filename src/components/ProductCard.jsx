import React from 'react';
import './ProductCard.css';

function ProductCard({
  title,
  price,
  category = 'General',
  inStock,
  onAddToCart,
  children
}) {
  return (
    <article className={`product-card ${inStock ? '' : 'out-of-stock'}`}>
      {children && <div className="product-badge">{children}</div>}

      <div className="product-icon" aria-hidden="true">
        {category === 'Electronics' ? '⌨️' :
          category === 'Books' ? '📚' :
          category === 'School Supplies' ? '📓' : '🎒'}
      </div>

      <p className="product-category">{category}</p>
      <h2>{title}</h2>
      <p className="product-price">
        {price.toLocaleString('en-PH', {
          style: 'currency',
          currency: 'PHP',
          minimumFractionDigits: 2
        })}
      </p>

      <p className={`stock-label ${inStock ? 'available' : 'unavailable'}`}>
        {inStock ? '● In Stock' : '● Out of Stock'}
      </p>

      <button
        className="add-button"
        type="button"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        {inStock ? 'Add to Cart' : 'Unavailable'}
      </button>
    </article>
  );
}

export default ProductCard;
