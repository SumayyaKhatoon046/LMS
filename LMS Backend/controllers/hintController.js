exports.generateHint = async (req, res) => {

  const { problem } = req.body;

  res.json({

    success: true,

    hint: "Think about using HashMap or Two Pointer approach instead of brute force."

  });

};