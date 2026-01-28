const Home = require('../models/Home');

exports.getHome = async (req, res) => {
  try {
    let home = await Home.findOne();
    if (!home) {
      home = await Home.create({});
    }
    res.status(200).json({ success: true, data: home });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    if (!home) {
      // Create new document with all fields including stats
      home = await Home.create(req.body);
    } else {
      // Update with entire body (including stats array)
      home = await Home.findByIdAndUpdate(home._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({ success: true, data: home });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
