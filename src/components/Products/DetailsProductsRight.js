import { BsFillCartPlusFill } from "react-icons/bs";
const DetailsProductsRight = ({ product }) => {
  return (
    <div className="detailsInfo__right__block">
      <div className="detailsInfo__right__block__name">{product.name}</div>
      <div className="detailsInfo__right__block__category">
        {product.category}
      </div>
      <div className="detailsInfo__right__block__color">color</div>
      <div className="detailsInfo__right__block__size">size</div>
      <div className="detailsInfo__right__block__cart">
        <BsFillCartPlusFill size={30} />
        <div>
          <span>$</span>
          {product.price}
        </div>
      </div>
    </div>
  );
};

export default DetailsProductsRight;
