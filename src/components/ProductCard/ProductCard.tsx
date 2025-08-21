import { Card, Button } from 'antd';
import './ProductCard.css';

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
    <Card
      hoverable
      cover={<img alt={name} src={thumbnail} className="product-thumbnail" />}
      style={{ width: 300, margin: '1rem' }}
    >
      <Card.Meta title={name} description={description} />
      <p className="product-price">{price}</p>
      <Button type="primary" onClick={handleBuy} style={{ marginTop: '1rem' }}>
        Buy
      </Button>
    </Card>
  );
}

export default ProductCard;