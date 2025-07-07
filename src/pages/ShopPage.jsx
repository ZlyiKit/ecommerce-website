import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import "../styles/ShopPage.css";
import { useCart } from "../components/CartContext";
import ProgressBar from "../components/ProgressBar";

export default function ShopPage() {
  const { addToCart } = useCart();

  const [filters, setFilters] = useState({
    type: "",
    size: "",
    color: "",
    material: "",
    price: "",
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  // State for showing toast message
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const result = productsData.filter((product) => {
      if (filters.type && product.type !== filters.type) return false;
      if (filters.size && product.size !== filters.size) return false;
      if (filters.color && product.color !== filters.color) return false;
      if (filters.material && product.material !== filters.material) return false;
      if (filters.price) {
        const [min, max] = filters.price.split("-").map(Number);
        if (product.price < min || product.price > max) return false;
      }
      return true;
    });
    setFilteredProducts(result);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <main className="shop-container">
      {/* Progress bar at top, full width */}
      
      <ProgressBar currentStep={1} />

      {/* Toast message */}
      {showToast && (
        <div className="toast-message">
          Product added to cart!
        </div>
      )}

      {/* Sidebar and product list side by side */}
      <div className="shop-content">
        <FilterSidebar filters={filters} onChange={handleFilterChange} />
        <section className="products">
          {filteredProducts.length > 0 && (
            <>
              <ProductCard
                product={filteredProducts[0]}
                onAddToCart={handleAddToCart}
                promo
              />
              {filteredProducts.slice(1).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
