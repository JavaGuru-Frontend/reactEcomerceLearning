import { useState, useEffect } from 'react';
import { Input, Spin, Layout } from 'antd';
import './Product.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../../components/Categories/Categories';

const { Sider, Content } = Layout;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProductsByCategory = (category: string) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    // Fetch default category products (e.g., "smartphones") on initial load
    fetchProductsByCategory('smartphones');
  }, []);

  return (
    <Layout className="product-layout">
      <Sider width={250} className="product-sider">
        <h2>Categories</h2>
        <Categories onCategoryClick={fetchProductsByCategory} />
      </Sider>
      <Content className="product-content">
        <h1>Product Search</h1>
        <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: '100%', maxWidth: '400px', margin: '0 auto 2rem', display: 'block' }}
        />
        {loading ? (
          <Spin tip="Loading..." />
        ) : (
          <div className="product-list">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                description={product.description}
                price={`$${product.price}`}
                thumbnail={product.thumbnail}
              />
            ))}
          </div>
        )}
      </Content>
    </Layout>
  );
}

export default Product;