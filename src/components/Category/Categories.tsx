
import "./Categories.css"; 
import getCategoryData from "./getCategoryData";


interface CategoriesProps {
	onCategoryClick: (category: string) => void;
	title: string;
}

function Categories({title, onCategoryClick}: CategoriesProps) {
	const {categories, loading } = getCategoryData();  // get category data from getCategoryData.tsx

if (loading) {	
	return <span className="loading loading-dots loading-lg"></span>;
}

  return (
	<ul className="menu bg-base-200 rounded-box w-56 wide">
		{title && <li className="menu-title line">{title}</li>}
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

// export const 