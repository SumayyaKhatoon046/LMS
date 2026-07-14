import { useState } from "react";
import { submitQuiz } from "../../services/quizService";

const QuizModal = ({ quiz, onClose, onPassed }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectAnswer = (questionId, answer) => {
    const filtered = answers.filter(
      (a) => a.questionId !== questionId
    );

    setAnswers([
      ...filtered,
      {
        questionId,
        answer,
      },
    ]);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const result = await submitQuiz(
        quiz._id,
        answers
      );

      alert(
        `Score : ${result.score}/${result.totalQuestions}\nPercentage : ${result.percentage}%`
      );

      if (result.passed) {

        onPassed();

        window.location.reload();

      } else {
        
        alert(

  `Quiz Failed ❌

Next lecture is still locked.

Please retry the quiz.`

);
      }

      onClose();

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-slate-900 rounded-2xl w-[800px] max-h-[90vh] overflow-auto p-8">

        <h2 className="text-3xl text-white font-bold mb-8">
          {quiz.title}
        </h2>

        {quiz.questions.map((q, index) => (

          <div
            key={q._id}
            className="mb-8"
          >

            <h3 className="text-white font-semibold mb-4">
              {index + 1}. {q.question}
            </h3>

            {q.options.map((option) => (

              <button
                key={option}
                onClick={() =>
                  selectAnswer(q._id, option)
                }
                className="block w-full text-left mb-3 p-3 rounded-lg bg-slate-800 hover:bg-cyan-700 text-white"
              >
                {option}
              </button>

            ))}

          </div>

        ))}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-600 py-3 rounded-xl text-white font-bold"
        >
          {loading
            ? "Submitting..."
            : "Submit Quiz"}
        </button>

      </div>

    </div>
  );
};

export default QuizModal;