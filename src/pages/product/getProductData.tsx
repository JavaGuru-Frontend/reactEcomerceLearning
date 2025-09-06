import {useState, useEffect} from 'react';

function getProductData(category: string) {

	const[products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

		useEffect(() => {
			fetch(`https://dummyjson.com/products/category/${category}`)
			.then(res => res.json())
			.then((data) => {
				setProducts(data.products);
				setLoading(false);

		});
	}, []);

return {products, loading};

}
export default getProductData;