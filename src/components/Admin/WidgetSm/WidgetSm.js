import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdVisibility } from "react-icons/md";
import { useContext } from "react";
import ReviewContext from "../../../context/ReviewContext";
const WidgetSm = () => {
  const {
    ReviewsData: { review },
  } = useContext(ReviewContext);

  return (
    <>
      <div className="widgetSm">
        <span className="widgetSm__title">New Join Members</span>
        <ul className="widgetSm__list">
          {review.length > 0
            ? review.map((reviewData) => (
                <li className="widgetSm__list__item">
                  <div className="widgetSm__list__item__image">
                    <LazyLoadImage src={reviewData.image} />
                  </div>
               
                    <div className="widgetSm__list__item__user">
                      <span className="widgetSm__list__item__user__name">
                        {reviewData.name}
                      </span>
                      <span className="widgetSm__list__item__user__job">
                        {reviewData.job}
                      </span>
                    </div>
                    <button className="widgetSm__btn">
                      <MdVisibility className="widgetSm__icon" />
                      Display
                    </button>
                 
                </li>
              ))
            : ""}
        </ul>
        
      </div>
    </>
  );
};

export default WidgetSm;
