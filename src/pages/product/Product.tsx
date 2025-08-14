import { useState, useEffect } from 'react';
import './Product.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../../components/Categories/Categories';

interface Product {
  id: number;
  title: string; // Update to match the API response
  price: number; // Ensure price is a number
  description: string;
  thumbnail: string; // Add thumbnail property
}

function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsByCategory = (category: string) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch default category products (e.g., "smartphones") on initial load
    fetchProductsByCategory('smartphones');
  }, []);

  return (
    <div className="product-page">
      <h1>Products</h1>
      <Categories onCategoryClick={fetchProductsByCategory} />
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title} // Use title from the API
              description={product.description}
              price={`$${product.price}`} // Format price as a string
              thumbnail={product.thumbnail} // Use thumbnail from the API
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;