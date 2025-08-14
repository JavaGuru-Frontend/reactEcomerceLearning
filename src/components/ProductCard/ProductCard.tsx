import './ProductCard.css';
import BuyButton from '../BuyButton/BuyButton';

interface ProductCardProps {
  name: string;
  description: string;
  price: string; 
  thumbnail: string;
}

function ProductCard({ name, description, price, thumbnail }: ProductCardProps) {
  const handleBuy = () => {
    alert(`You bought ${name}!`);
  };

  return (
    <div className="product-card">
      <img src={thumbnail} alt={name} className="product-thumbnail" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="product-price">{price}</p>
      <BuyButton onClick={handleBuy} />
    </div>
  );
}

export default ProductCard;