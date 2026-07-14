const StarRating = ({ rating, setRating, readonly = false }) => {

  return (

    <div className="flex gap-2">

      {[1, 2, 3, 4, 5].map((star) => (

        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => setRating && setRating(star)}
          className={`text-3xl transition ${
            star <= rating
              ? "text-yellow-400"
              : "text-gray-500"
          }`}
        >
          ★
        </button>

      ))}

    </div>

  );

};

export default StarRating;