const Contact = require('../models/Contact');

exports.getContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();
    if (!contact) {
      contact = await Contact.create({});
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { email, phone, address, hours, city, country, socialLinks } = req.body;

    let contact = await Contact.findOne();
    if (!contact) {
      contact = await Contact.create({
        email,
        phone,
        address,
        hours,
        city,
        country,
        socialLinks,
      });
    } else {
      contact = await Contact.findByIdAndUpdate(contact._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
