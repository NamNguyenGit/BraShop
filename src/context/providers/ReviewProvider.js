import { useReducer } from "react";
import ReviewReducer from "../reducers/ReviesReducer";
import ReviewContext from "../ReviewContext";
import reviews from "../../data/reviews";

const ReviewProvider = (props) => {
  const [ReviewsData, dispatch] = useReducer(ReviewReducer, {
    review: reviews,
  });
  return (
    <ReviewContext.Provider value={{ ReviewsData, dispatch }}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
