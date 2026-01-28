const Header = require('../models/Header');

exports.getHeader = async (req, res) => {
  try {
    let header = await Header.findOne();
    if (!header) {
      header = await Header.create({});
    }
    res.status(200).json({ success: true, data: header });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHeader = async (req, res) => {
  try {
    const { phone, email, hours, facebook, twitter, instagram, linkedin } = req.body;

    let header = await Header.findOne();
    if (!header) {
      header = await Header.create({
        phone,
        email,
        hours,
        facebook,
        twitter,
        instagram,
        linkedin,
      });
    } else {
      header = await Header.findByIdAndUpdate(
        header._id,
        {
          phone,
          email,
          hours,
          facebook,
          twitter,
          instagram,
          linkedin,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({ success: true, data: header });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
