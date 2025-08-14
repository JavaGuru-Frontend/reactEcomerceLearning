import './ProductCard.css';
import BuyButton from './BuyButton';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
}

function ProductCard({ name, description, price }: ProductCardProps) {
  const handleBuy = () => {
    alert(`You bought ${name}!`);
  };

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="product-price">{price}</p>
      <BuyButton onClick={handleBuy} />
    </div>
  );
}

export default ProductCard;