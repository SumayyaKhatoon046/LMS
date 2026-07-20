const AIHint = () => {

  return (

    <div className="bg-slate-900 rounded-3xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-white">

        AI Hint

      </h2>

      <textarea
        className="w-full mt-4 p-4 rounded-xl"
        rows="5"
        placeholder="Paste coding problem here..."
      />

      <button
        className="mt-4 px-6 py-3 bg-cyan-600 text-white rounded-xl"
      >
        Get Hint
      </button>

    </div>

  );

};

export default AIHint;