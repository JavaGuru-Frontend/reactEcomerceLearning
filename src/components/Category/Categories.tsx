import { useEffect, useState } from 'react';

function Categories() {
	const [categories, setCategories] = useState([]);


	useEffect(() => {
		fetch('https://dummyjson.com/products/category-list')
		.then(res => res.json())
		.then(data) => {
			setCategories(data);
			console.log(categories);
		});
});

  return (

	<span>Hi thyere </span>

  )

}

export default Categories;