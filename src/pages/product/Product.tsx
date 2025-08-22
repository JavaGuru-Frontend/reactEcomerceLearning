
import './Product.css';
import products from '../../data/productData';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/Categories';
import { useEffect, useState } from 'react';
import {Input} from 'antd';

interface Product {
	id: 				number;
	title: 			string;
	description: 	string;
	price: 			string;
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
	
	const getSearchData = (event: React.ChangeEvent<HTMLInputElement>) => {
			console.log(event.target.value)

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
	getProductData('smartphones'); // Fetch smartphones 
}, []);

  return (
    <div className="product-page">
      <h1>Products</h1>
			<Input className='input' placeholder="Primary"
				placeholder="Search products..."
				onChange={getSearchData}
			/>
		<Categories 
			title="Categories"
			onCategoryClick={getProductData}
		/>

      <div className="product-list">
			{ products.length === 0 ? (
				<span>no products</span>
			)	: ( 
				products.map((product: Product) => (
					<ProductCard
					  key={product.id}
					  name={product.title}
					  description={product.description}
					  price={product.price}
					/>
				))
				)
				}
      </div>
    </div>
  );
}

export default Product;