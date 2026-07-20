const aiEngine = require("../services/aiEngine");
const { interviewPrompt } = require("../utils/prompts");


exports.generateInterview = async (req, res) => {

  try {

    const { role } = req.body;

    if (!role) {

      return res.status(400).json({

        success: false,

        message: "Role is required"

      });

    }

    const interviewQuestions = {

      "mern developer": [

        "Introduce yourself.",

        "Explain the Virtual DOM.",

        "Difference between JWT and Sessions?",

        "Explain MongoDB Aggregation.",

        "How does Express Middleware work?"

      ],

      "java developer": [

        "Explain OOP.",

        "Difference between ArrayList and LinkedList.",

        "What is JVM?",

        "Explain Exception Handling.",

        "What is Spring Boot?"

      ]

    };

    const key = role.toLowerCase();

    const questions =

      interviewQuestions[key] ||

      interviewQuestions["mern developer"];

    res.status(200).json({

      success: true,

      role,

      questions

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};