exports.getRevisionReminder = async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      reminders: [

        {

          topic: "Arrays",

          days: 8,

          priority: "High"

        },

        {

          topic: "React",

          days: 5,

          priority: "Medium"

        },

        {

          topic: "OOP",

          days: 12,

          priority: "High"

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