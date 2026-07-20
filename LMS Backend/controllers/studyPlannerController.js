const aiEngine = require("../services/aiEngine");

exports.getStudyPlan = async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      plan: [

        {

          time: "09:00 AM",

          task: "Learn React",

          duration: "1 Hour"

        },

        {

          time: "11:00 AM",

          task: "Solve 2 DSA Problems",

          duration: "45 Minutes"

        },

        {

          time: "02:00 PM",

          task: "Practice Aptitude",

          duration: "30 Minutes"

        },

        {

          time: "07:00 PM",

          task: "Revise Java",

          duration: "1 Hour"

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