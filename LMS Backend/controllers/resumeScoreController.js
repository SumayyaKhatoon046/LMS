exports.getResumeScore = async (req, res) => {

  res.json({

    success: true,

    score: 82,

    missingSkills: [

      "Docker",

      "AWS",

      "System Design"

    ],

    suggestions: [

      "Add Projects",

      "Add GitHub",

      "Improve Resume Summary"

    ]

  });

};