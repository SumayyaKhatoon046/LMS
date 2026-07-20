const model = require("./gemini");

exports.generateJSON = async (prompt) => {

  const result = await model.generateContent(prompt);

  const response = result.response;

  const text = response.text();

  const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {

    return JSON.parse(cleanText);

  }

  catch (error) {

    console.log(cleanText);

    throw new Error("Invalid JSON returned by Gemini");

  }

};