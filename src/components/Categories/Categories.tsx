import { useEffect, useState } from 'react';
import './Categories.css';

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

function Categories({ onCategoryClick }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="categories">
      <h2>Product Categories</h2>
      <ul className="categories-list">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="category-item"
            onClick={() => onCategoryClick(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;