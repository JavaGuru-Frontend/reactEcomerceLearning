import './Product.css';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/categories';
import { useState, useEffect } from 'react';
import { Input } from 'antd';
import ZekaExample from '../../components/ZekaExample/zekaExample';

interface Product {
  id:           number;
  title:        string;
  description:  string;
  price:        string;
  thumbnail:    string;
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

  const getSearchData = (event: React.ChangeEvent<HTMLInputElement>) => {
    fetch(`https://dummyjson.com/products/search?q=${event.target.value}`)
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching search data:', error);
      }
    );
  }

  useEffect(() => {
    getProductData('smartphones');
  }, []);

  const onZekaClick = () => {
    console.log('ZekaExample onproduct page clicked');
  }

  return (
    <div className="product-page">   
      <ZekaExample 
        title="test1"
        products={products} 
        onZekaClick={onZekaClick}
      />

      <h1>Products</h1>
      <Input
        placeholder="input search text"
        size="large"
        onChange={getSearchData}
      />

      <Categories 
        onCategoryClick={getProductData}
      />

      <div className="product-list">
        { products.length === 0 ? (
          <span>no products</span>
        ) : (
          products.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))
        ) 
        } 
      </div>
    </div>
  );
}

export default Product;