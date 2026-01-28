const Footer = require('../models/Footer');

exports.getFooter = async (req, res) => {
  try {
    let footer = await Footer.findOne();
    if (!footer) {
      footer = await Footer.create({});
    }
    res.status(200).json({ success: true, data: footer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFooter = async (req, res) => {
  try {
    const { description, year, companyName, rights, quickLinks, contact, socialLinks } = req.body;

    let footer = await Footer.findOne();
    if (!footer) {
      footer = await Footer.create({
        description,
        year,
        companyName,
        rights,
        quickLinks,
        contact,
        socialLinks,
      });
    } else {
      footer = await Footer.findByIdAndUpdate(footer._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({ success: true, data: footer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
