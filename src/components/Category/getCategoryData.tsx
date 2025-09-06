import {useState, useEffect} from 'react';

//fetch category data from dummyjson api

function getCategoryData() {
		const [categories, setCategories] = useState([]);
		const [loading, setLoading] = useState(true);

		
		useEffect(() => {
			fetch('https://dummyjson.com/products/category-list')
			.then(res => res.json())
			.then((data) => {
			setCategories(data);
			setLoading(false);
		});
	}, []);
{
	return {categories, loading};
}
}
export default getCategoryData;