const FAQ = () => {
  return (
    <section className="bg-slate-950 py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl text-white font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-white font-bold">
              Is this LMS free?
            </h3>

            <p className="text-gray-400 mt-3">
              Yes. Basic learning features are free.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-white font-bold">
              Do you provide certificates?
            </h3>

            <p className="text-gray-400 mt-3">
              Yes. Certificates are generated after course completion.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;