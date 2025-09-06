import './ProductCard.css';
import BuyButton from './BuyButton';


interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  thumbnail?: string;
}

function ProductCard({ name, description, price, thumbnail }: ProductCardProps) {
  const handleBuy = () => {
    alert(`You bought ${name}!`);
  };

  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure>
    <img
      src={thumbnail}
      alt="Shoes" />
  </figure>
      <div className="card-body">
           <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p className="product-price">{price}</p>
          <div className="card-actions justify-end">
            <BuyButton onClick={handleBuy} />
          </div>
      </div>
    </div>
  );
}

export default ProductCard;