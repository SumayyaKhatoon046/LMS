import { useEffect, useState } from "react";

import { getCourseReviews } from "../../services/reviewService";

import ReviewCard from "./ReviewCard";

const ReviewList = ({ courseId, refresh }) => {

  const [reviews, setReviews] = useState([]);

  const [averageRating, setAverageRating] = useState(0);

  const [totalReviews, setTotalReviews] = useState(0);

  const fetchReviews = async () => {

    try {

      const data = await getCourseReviews(courseId);

      setReviews(data.reviews);

      setAverageRating(data.averageRating);

      setTotalReviews(data.totalReviews);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchReviews();

  }, [courseId, refresh]);

  return (

    <div className="mt-12">

      <h2 className="text-3xl font-bold text-white">
        Reviews
      </h2>

      <p className="text-yellow-400 mt-2">
        ⭐ {averageRating} ({totalReviews} Reviews)
      </p>

      <div className="space-y-5 mt-8">

        {reviews.length === 0 ? (

          <p className="text-gray-400">
            No Reviews Yet
          </p>

        ) : (

          reviews.map((review) => (

            <ReviewCard
              key={review._id}
              review={review}
            />

          ))

        )}

      </div>

    </div>

  );

};

export default ReviewList;