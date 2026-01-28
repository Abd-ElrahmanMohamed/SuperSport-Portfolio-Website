const About = require('../models/About');

exports.getAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({});
    }
    res.status(200).json({ success: true, data: about });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create(req.body);
    } else {
      about = await About.findByIdAndUpdate(about._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({ success: true, data: about });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
