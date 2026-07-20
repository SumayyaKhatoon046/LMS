const aiEngine = require("../services/aiEngine");
const { codeReviewPrompt } = require("../utils/prompts");

exports.reviewCode = async (req, res) => {

  try {

    const { code } = req.body;

    if (!code) {

      return res.status(400).json({

        success: false,

        message: "Code is required"

      });

    }

    const review = await aiEngine(

  codeReviewPrompt(code)

);

    res.status(200).json({

      success: true,

      review

    });

  }

  catch (error) {

    console.error("Gemini Error:", error);

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};