import { useState, useEffect } from 'react';
import { Spin, Layout, Button } from 'antd';
import './Product.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../../components/Categories/Categories';
// import SearchInput from '../../components/SearchInput/SearchInput';

const { Sider, Content } = Layout;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  quantity?: number;
}

function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

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

  // const handleSearch = (query: string) => {
  //   if (query) {
  //     setLoading(true);
  //     fetch(`https://dummyjson.com/products/search?q=${query}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProducts(data.products);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching products:', error);
  //         setLoading(false);
  //       });
  //   } else {
  //     setProducts([]);
  //   }
  // };

  const handleAddToCart = (product: Product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      setSelectedProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        )
      );
    } else {
      setSelectedProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    }
    localStorage.setItem(
      'selectedProducts',
      JSON.stringify([...selectedProducts, { ...product, quantity: 1 }])
    );
  };

  useEffect(() => {
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
        {/* <SearchInput onSearch={handleSearch} placeholder="Search for products..." /> */}
        {loading ? (
          <Spin tip="Loading..." />
        ) : (
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  name={product.title}
                  description={product.description}
                  price={`$${product.price}`}
                  thumbnail={product.thumbnail}
                />
                <Button
                  type="primary"
                  onClick={() => handleAddToCart(product)}
                  style={{ marginTop: '1rem' }}
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
      </Content>
    </Layout>
  );
}

export default Product;