import './Product.css';
import products from '../../data/productData';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Category/Categories';

function Product() {
  return (
    <div className="product-page">
      <h1>Products</h1>
		<Categories />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;