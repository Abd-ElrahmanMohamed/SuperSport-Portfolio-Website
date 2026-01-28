const Navigation = require('../models/Navigation');

exports.getNavigation = async (req, res) => {
  try {
    let navigation = await Navigation.findOne();
    if (!navigation) {
      navigation = await Navigation.create({ links: [] });
    }
    res.status(200).json({ success: true, data: navigation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateNavigation = async (req, res) => {
  try {
    const { links, brandName, brandLogo } = req.body;

    let navigation = await Navigation.findOne();
    if (!navigation) {
      navigation = await Navigation.create({ links, brandName, brandLogo });
    } else {
      navigation = await Navigation.findByIdAndUpdate(
        navigation._id,
        { links, brandName, brandLogo },
        { new: true, runValidators: true }
      );
    }

    res.status(200).json({ success: true, data: navigation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
