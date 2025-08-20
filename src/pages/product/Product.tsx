
import './Product.css';
import products from '../../data/productData';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/Categories';
import { useEffect, useState } from 'react';

interface Product {
	id: number;
	title: string;
	description: string;
	price: string;
}

function Product() {
	const[products, setProducts] = useState([]);

	const getProductData = (category: string) => {
		fetch(`https://dummyjson.com/products/category/${category}`)
		.then(res => res.json())
		.then((data) => {
			setProducts(data.products);
		}) 
	}
	
	useEffect(() => {
		getProductData('smartphones'); // Fetch smartphones 
	}, []);

  return (
    <div className="product-page">
      <h1>Products</h1>
		<Categories 
			title="Categories"
			onCategoryClick={getProductData}
		/>

      <div className="product-list">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;