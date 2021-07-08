import {IProduct} from '../../../interfaces/IProduct';

const Product: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <li className="card">
      <img className="card__img" src={image} alt="" />
      <p className="card__description">{name}</p>
      <p className="card__price">R$ {price}</p>
    </li>
  );
}

export default Product;
