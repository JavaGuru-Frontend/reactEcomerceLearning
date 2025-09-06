
import './Product.css';
import products from '../../data/productData';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/Categories';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/input';

interface Product {
	id: 				number;
	title: 			string;
	description: 	string;
	price: 			string;
	thumbnail: 	string;
}

function Product() {

	const[products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const getProductData = (category: string) => {
		fetch(`https://dummyjson.com/products/category/${category}`)
		.then(res => res.json())
		.then((data) => {
			setProducts(data.products);
			setLoading(false);
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

if (loading) {	
	return <span className="loading loading-dots loading-lg"></span>;
}

  return (
    <div className="product-page">
		<div className="container">
			<div className="row">
				<div className='col-lg3'>
						<Input 
						type="Search"
						placeholder='Search products...'
						onChange={getSearchData}					
						/>
						<div className="wrapper">
						<Categories 
							title="Product Categories"
							onCategoryClick={getProductData}
						/>
					</div>
				</div>
			<div className='col-lg9'>
     			 <div className="row">
						{ products.length === 0 ? (
							<span>no products</span>
							)	: ( 
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
	</div>
</div>
</div>
  );
}

export default Product;