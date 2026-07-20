exports.startMockInterview = async (req, res) => {

  res.json({

    success: true,

    interview: {

      title: "Java Developer Mock Interview",

      questions: [

        "Tell me about yourself.",

        "Explain OOP.",

        "Difference between ArrayList and LinkedList?",

        "What is JVM?",

        "Explain Exception Handling."

      ]

    }

  });

};