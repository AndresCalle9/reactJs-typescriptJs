import './ProductCars.scss';

interface ProductCardProps {
  url: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ url, title }) => {
  return (
    <div>
      <div className='col'>
        <img src={url} className='d-block mx-auto img-fluid' />
        <div className='title'>{title}</div>
      </div>
    </div>
  );
};

export default ProductCard;
