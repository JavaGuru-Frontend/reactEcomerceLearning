import './Product.css';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/categories';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  thumbnail: string;
}

function Product() {
  const [products, setProducts] = useState([]);

  const getProductData = ( category: string ) => {
      fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then((data) => {
          setProducts(data.products);
      })
  }

  useEffect(() => {
    getProductData('smartphones');
  }, []);

  return (
    <div className="product-page">      
      <h1>Products</h1>
      <Categories 
        onCategoryClick={getProductData}
      />

      <div className="product-list">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;