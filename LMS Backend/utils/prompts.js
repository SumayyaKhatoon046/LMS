exports.codeReviewPrompt = (code) => `

You are a Senior Software Engineer.

Analyze the following code.

Code:

${code}

Return ONLY valid JSON.

{
  "timeComplexity":"",
  "spaceComplexity":"",
  "explanation":"",
  "improvements":[
    "",
    "",
    ""
  ],
  "interviewQuestions":[
    "",
    "",
    ""
  ]
}

Do not return markdown.
Do not return explanation outside JSON.

`;


exports.interviewPrompt = ({ role }) => `

Generate 10 interview questions for ${role}.

Return ONLY JSON.

{
  "questions":[]
}

`;



exports.resumePrompt = () => `

Analyze Resume.

Return JSON.

{
  "atsScore":0,
  "strengths":[],
  "improvements":[]
}

`;


exports.careerPrompt = ({ skills }) => `

Suggest career based on

${skills}

Return JSON.

{
  "career":"",
  "salary":"",
  "roadmap":[]
}

`;


exports.studyPlannerPrompt = ({ goal }) => `

Create Study Plan.

Goal:

${goal}

Return JSON.

{
  "days":[]
}

`;