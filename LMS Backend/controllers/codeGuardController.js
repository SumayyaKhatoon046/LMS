exports.checkCode = async (req, res) => {

  const { pasted } = req.body;

  if (pasted) {

    return res.json({

      success: false,

      message: "Copy Paste is not allowed."

    });

  }

  res.json({

    success: true

  });

};