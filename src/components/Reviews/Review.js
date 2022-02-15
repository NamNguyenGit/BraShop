import { useState, useContext } from "react";
import ReviewContext from "../../context/ReviewContext";
import ReviewBody from "./ReviewBody";
const Review = () => {
  const [state] = useState({
    title: "What our customers are saying?",
  });

  const {
    ReviewsData: { review },
  } = useContext(ReviewContext);

  return (
    <>
      <div className="reviews">
        <div className="container">
          <div className="heading">{state.title}</div>
          <div className="row">
            {review.length > 0
              ? review.map((reviewData) => (
                  <ReviewBody key={reviewData.id} review={reviewData} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
