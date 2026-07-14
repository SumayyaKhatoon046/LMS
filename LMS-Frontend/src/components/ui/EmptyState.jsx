const EmptyState = ({ title }) => {
  return (
    <div className="text-center py-20">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="text-gray-500 mt-3">
        No Data Available
      </p>

    </div>
  );
};

export default EmptyState;