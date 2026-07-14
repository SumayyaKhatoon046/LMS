import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

      <div className="flex justify-between items-center">

        <h3 className="text-white text-lg font-bold">
          {review.student?.name}
        </h3>

        <StarRating
          rating={review.rating}
          readonly={true}
        />

      </div>

      <p className="text-gray-400 mt-4">
        {review.comment}
      </p>

      <p className="text-sm text-gray-500 mt-4">
        {new Date(review.createdAt).toLocaleDateString()}
      </p>

    </div>
  );
};

export default ReviewCard;