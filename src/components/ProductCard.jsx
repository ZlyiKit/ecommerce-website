import '../styles/ProductCard.css';

export default function ProductCard({ product, onAddToCart, promo = false }) {
  return (
    <div className={`product-card ${promo ? 'promo-card' : ''}`}>
      {product.sale && (
        <div className="sale-badge">
          {product.sale} OFF
        </div>
      )}

      {product.newCollection && (
        <div className="new-collection-tag">
          New Collection
        </div>
      )}

      {/* IMAGE */}
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />

      {/* INFO CONTAINER */}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
