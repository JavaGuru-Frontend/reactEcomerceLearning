import { useEffect, useState } from "react";

interface CategoriesProps {
    onCategoryClick: (category: string) => void;
}

function Categories({onCategoryClick}: CategoriesProps) {
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {categories.map((category, index) => (
                <li 
                    key={index}
                    onClick={() => onCategoryClick(category)}
                >
                    {category}
                </li>
            ))}
        </ul>       
    )
}

export default Categories;
