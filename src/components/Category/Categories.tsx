import { useEffect, useState } from "react";
import "./Categories.css"; 

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
	return <span className="loading loading-dots loading-lg"></span>;
}


  return (
	<ul className="menu bg-base-200 rounded-box w-56 wide">
		{title && <li className="menu-title">{title}</li>}
		{categories.map((category: string) => (
	
		<li className="wide"><a className="wide"
				key={category}
				onClick={() => onCategoryClick(category)}
			>
				{category}
				</a> 
			</li>
		
		))}
	</ul>

	
  )

}

export default Categories;