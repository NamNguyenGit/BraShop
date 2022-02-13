import {BsFillCartPlusFill} from "react-icons/bs"
const DetailsProductsRight = ({product}) => {

    return (
        <div className="detailsInfo__right__block">
            <div className="detailsInfo__right__block__name">{product.name}</div>
            <div className="detailsInfo__right__block__category">{product.category}</div>
            <div className="detailsInfo__right__block__color"></div>
            <div className="detailsInfo__right__block__size"></div>
            <div className="detailsInfo__right__block__cart"> <BsFillCartPlusFill size={30} /> ADD  <span>$</span><div>{product.price}</div> </div>
        </div>
    );
}
 
export default DetailsProductsRight;