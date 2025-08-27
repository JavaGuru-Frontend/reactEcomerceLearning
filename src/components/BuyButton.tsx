import './BuyButton.css';

interface BuyButtonProps {
  onClick: () => void;
}

function BuyButton({ onClick }: BuyButtonProps) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Buy Now
    </button>
  );
}

export default BuyButton;