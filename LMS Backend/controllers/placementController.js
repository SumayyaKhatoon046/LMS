exports.getPlacementScore = async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      score: {

        overall: 78,

        dsa: 80,

        projects: 90,

        resume: 65,

        communication: 55,

        github: 85,

        linkedin: 70

      },

      suggestions: [

        "Improve Communication",

        "Practice DSA Daily",

        "Build One More Project",

        "Optimize GitHub Profile"

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