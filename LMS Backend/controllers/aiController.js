const skillMap = {

  java: [
    "Core Java",
    "OOP",
    "Collections",
    "JDBC",
    "Spring Boot"
  ],

  mern: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ]

};

const roadmapTemplates = {

  "mern developer": {

    duration: "6 Months",

    phases: [

      {
        title: "Month 1",
        topics: [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },

      {
        title: "Month 2",
        topics: [
          "React",
          "Tailwind CSS",
          "Redux"
        ]
      },

      {
        title: "Month 3",
        topics: [
          "Node.js",
          "Express.js",
          "MongoDB"
        ]
      },

      {
        title: "Month 4",
        topics: [
          "JWT",
          "REST API",
          "Cloudinary"
        ]
      },

      {
        title: "Month 5",
        topics: [
          "LMS Project",
          "Chat App",
          "Deployment"
        ]
      },

      {
        title: "Month 6",
        topics: [
          "DSA",
          "Mock Interviews",
          "Resume"
        ]
      }

    ]

  },

  "java developer": {

    duration: "6 Months",

    phases: [

      {
        title: "Month 1",
        topics: [
          "Core Java",
          "OOP"
        ]
      },

      {
        title: "Month 2",
        topics: [
          "Collections",
          "Exception Handling"
        ]
      },

      {
        title: "Month 3",
        topics: [
          "JDBC",
          "MySQL"
        ]
      },

      {
        title: "Month 4",
        topics: [
          "Spring Boot",
          "REST APIs"
        ]
      },

      {
        title: "Month 5",
        topics: [
          "Projects",
          "Deployment"
        ]
      },

      {
        title: "Month 6",
        topics: [
          "DSA",
          "Interview Preparation"
        ]
      }

    ]

  }

};

exports.generateRoadmap = async (req, res) => {

  try {

    const {
      goal,
      branch,
      year,
      skills,
      studyHours
    } = req.body;

    if (!goal) {

      return res.status(400).json({

        success: false,

        message: "Goal is required"

      });

    }

    const key = goal.toLowerCase();

    const roadmap =
      roadmapTemplates[key] ||
      roadmapTemplates["mern developer"];

    const skillMap = {

      java: [
        "Core Java",
        "OOP",
        "Collections",
        "JDBC",
        "Spring Boot"
      ],

      mern: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB"
      ]

    };

    let known = [];

    if (skills) {

      known = skills
        .split(",")
        .map(skill => skill.trim());

    }

    const required =
      skillMap[key.split(" ")[0]] || [];

    const missing = required.filter(

      skill =>

        !known.some(

          s =>

            s.toLowerCase() ===
            skill.toLowerCase()

        )

    );

    const readiness = Math.round(

      (known.length /

        (known.length + missing.length || 1))

      * 100

    );

    res.status(200).json({

      success: true,

      student: {

        branch,

        year,

        skills,

        studyHours

      },

      roadmap,

      skillGap: {

        known,

        missing,

        readiness

      },

      suggestions: [

        "Practice Coding Daily",

        "Build One Project Every Month",

        "Revise DSA Weekly",

        "Give Mock Interviews"

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