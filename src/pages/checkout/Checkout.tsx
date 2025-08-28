import { useState } from 'react';
import './Checkout.css';

interface SelectedProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

function Checkout() {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    JSON.parse(localStorage.getItem('selectedProducts') || '[]')
  );

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {selectedProducts.length === 0 ? (
        <p>No products selected.</p>
      ) : (
        <div>
          <ul className="checkout-list">
            {selectedProducts.map((product) => (
              <li key={product.id} className="checkout-item">
                <span>{product.title}</span>
                <span>Quantity: {product.quantity}</span>
                <span>Price: ${product.price * product.quantity}</span>
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;