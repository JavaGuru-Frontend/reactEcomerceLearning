import { useEffect, useState } from "react";

interface CategoriesProps {
	onCategoryClick: (category: string) => void;
	title: string;
}


function Categories({onCategoryClick, title}: CategoriesProps) {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);



	useEffect(() => {
		fetch('https://dummyjson.com/products/category-list')
		.then(res => res.json())
	.then((data) => {
		setCategories(data);
		console.log(categories);
		setLoading(false);
	});
}, []);

if (loading) {	
	return <div>Loading...</div>;
}


  return (
	<ul>
		{title && <h2>{title}</h2>}
		{categories.map((category: string) => (
			<li 
				key={category}
				onClick={() => onCategoryClick(category)}
			>
				{category}
			</li>
		))}
	</ul>
	
  )

}

export default Categories;