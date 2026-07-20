const { generateJSON } = require("../utils/geminiJson");

const aiEngine = async (prompt) => {
  return await generateJSON(prompt);
};

module.exports = aiEngine;