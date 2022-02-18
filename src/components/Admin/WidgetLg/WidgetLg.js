import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import ReviewContext from "../../../context/ReviewContext";
const WidgetLg = () => {
  const {
    ReviewsData: { review },
  } = useContext(ReviewContext);
  const Button = ({ type }) => {
    return <button className={"widgetLg__btn " + type}>{type}</button>;
  };
  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLg__title">Latest Transactions</h3>

        <table className="widgetLg__table">
          <tr className="widgetLg__table__tr">
            <th className="widgetLg__table__th">Customers</th>
            <th className="widgetLg__table__th">Date</th>
            <th className="widgetLg__table__th">Amount</th>
            <th className="widgetLg__table__th">Status</th>
          </tr>
          {review.length > 0
            ? review.map((reviewData) => (
                <tr className="widgetLg__table__tr" key={reviewData.id}>
                  <td className="widgetLg__table__td">
                    <div className="widgetLg__table__td__image">
                      <LazyLoadImage src={reviewData.image} />
                    </div>
                    <span className="widgetLg__table__td__name">
                      {reviewData.name}
                    </span>
                  </td>
                  <td className="widgetLg__table__td__date">{reviewData.date}</td>
                  <td className="widgetLg__table__td__amount">{reviewData.amount}</td>
                  <td className="widgetLg__table__td__status">
                    <Button type={reviewData.status} />
                  </td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </>
  );
};

export default WidgetLg;
