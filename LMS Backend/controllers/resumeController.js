const aiEngine = require("../services/aiEngine");

exports.reviewResume = async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      review: {

        atsScore: 82,

        strengths: [

          "Good Projects",

          "Strong Technical Skills",

          "Clean Resume"

        ],

        improvements: [

          "Add GitHub Profile",

          "Improve Summary",

          "Add Quantified Achievements"

        ]

      }

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};