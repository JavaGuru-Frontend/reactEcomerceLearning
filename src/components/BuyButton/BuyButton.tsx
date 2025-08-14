import './BuyButton.css';

interface BuyButtonProps {
  onClick: () => void;
}

function BuyButton({ onClick }: BuyButtonProps) {
  return (
    <button className="buy-button" onClick={onClick}>
      Buy
    </button>
  );
}

export default BuyButton;