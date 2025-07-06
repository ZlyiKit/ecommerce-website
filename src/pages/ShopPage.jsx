import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import "../styles/ShopPage.css";
import { useCart } from "../components/CartContext"; // import context hook

export default function ShopPage() {
  const { addToCart } = useCart();  // get addToCart from context

  const [filters, setFilters] = useState({
    type: "",
    size: "",
    color: "",
    material: "",
    price: "",
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

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

  // Updated handler to use addToCart from context and pass full product
  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <main className="shop-container">
      <FilterSidebar filters={filters} onChange={handleFilterChange} />
      <section className="products">
        {filteredProducts.length > 0 && (
          <>
            {/* Promo Card */}
            <ProductCard
              product={filteredProducts[0]}
              onAddToCart={handleAddToCart}
              promo
            />

            {/* Rest of the cards */}
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
    </main>
  );
}
