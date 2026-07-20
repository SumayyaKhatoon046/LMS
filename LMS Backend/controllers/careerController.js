const aiEngine = require("../services/aiEngine");


exports.getCareerPrediction = async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      careers: [

        {
          role: "MERN Developer",
          readiness: 82,
          level: "High"
        },

        {
          role: "Java Developer",
          readiness: 75,
          level: "Medium"
        },

        {
          role: "Backend Developer",
          readiness: 88,
          level: "High"
        },

        {
          role: "AI Engineer",
          readiness: 40,
          level: "Low"
        }

      ]

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};