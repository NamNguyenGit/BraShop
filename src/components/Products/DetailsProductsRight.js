import { BsFillCartPlusFill, BsBagCheckFill } from "react-icons/bs";
import Colors from "../Colors/Colors";
import { BsStarFill, BsStar } from "react-icons/bs";
const DetailsProductsRight = ({ product }) => {


  const rating = (number) => {
    let containerStar = [];
    for (let i = 1; i <= 5; i++) {
      if(i <= number) {
        containerStar.push(
          <BsStarFill
          key={i}
          size={15}
          color="df2189"
          className="detailsInfo__review"
          />
        );
      } else {
        containerStar.push(
          <BsStar
            key={i}
            size={13}
            color="df2189"
            className="detailsInfo__review"
          />
        )
      }
    }
    return containerStar;
  }

  const checkPrice = (status) => {
    let container = [];
    if (status === "Sale") {
      container.push(
        <div key={product.id}>
          <span>$</span>
          {product.sale_price}
        </div>
      );
    } else if (status === "Sold out") {
      container.push(<div key={product.id}>Sorry we are out of stock. </div>);
    } else {
      container.push(
        <div key={product.id}>
          <span>$</span>
          {product.price}
        </div>
      );
    }

    return container;
  };

  return (
    <div className="detailsInfo__right__block">
      <div className="detailsInfo__right__block__name">{product.name}</div>
      <div className="detailsInfo__right__block__category">
        {product.category}
      </div>
      <div className="detailsInfo__right__block__star">
        {rating(product.stars)}
      </div>
      <div className="detailsInfo__right__block__color">
        <Colors  />
      </div>
      <div className="detailsInfo__right__block__size">Size</div>
      <div className="detailsInfo__right__block__sizeDetail">
        {product.size}
      </div>
      <div className="detailsInfo__right__block__cart">
        <BsBagCheckFill size={30} />
        <div>Add To  Wishlist</div>
      </div>
      <div className="detailsInfo__right__block__cart">
        <BsFillCartPlusFill size={30} />
        <div>{checkPrice(product.status)}</div>
      </div>
    </div>
  );
};

export default DetailsProductsRight;
