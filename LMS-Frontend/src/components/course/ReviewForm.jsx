import { useState } from "react";

import StarRating from "./StarRating";
import { addReview } from "../../services/reviewService";

const ReviewForm = ({ courseId, onReviewAdded }) => {

  const [rating, setRating] = useState(5);

  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const submitReview = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await addReview({
        courseId,
        rating,
        comment,
      });

      alert("Review Added Successfully");

      setComment("");
      setRating(5);

      onReviewAdded();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to add review"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      onSubmit={submitReview}
      className="bg-slate-900 rounded-2xl p-6 mt-10"
    >

      <h2 className="text-2xl text-white font-bold mb-5">
        Leave a Review
      </h2>

      <StarRating
        rating={rating}
        setRating={setRating}
      />

      <textarea
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        placeholder="Write your review..."
        rows={4}
        required
        className="w-full mt-5 rounded-xl bg-slate-800 text-white p-4 outline-none"
      />

      <button
        disabled={loading}
        className="mt-5 bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl text-white"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

    </form>

  );

};

export default ReviewForm;