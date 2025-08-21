interface ZekaExampleProps {
    title: string;
    onZekaClick: () => void;
    products?: Array<{
        id:           number;
        title:        string;
        description:  string;
        price:        string;
        thumbnail:    string;}>;
}

const ZekaExample = ({title, onZekaClick, products}: ZekaExampleProps) => {

    return (
        <div>
        <h1>{title}</h1>
        <p>This is a placeholder for the ZekaExample component.</p>
        <button onClick={onZekaClick}>test</button>
        {products && products.length > 0 && (
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <img src={product.thumbnail} alt={product.title} />
                    </li>
                ))}
            </ul>
        )}
        </div>
    );
}

export default ZekaExample