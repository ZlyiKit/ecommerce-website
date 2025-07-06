import '../styles/ProductCard.css';

export default function ProductCard({ product, onAddToCart, promo = false }) {
  return (
    <div className={`product-card ${promo ? 'promo-card' : ''}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
