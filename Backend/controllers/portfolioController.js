const Portfolio = require('../models/Portfolio');

exports.getPortfolios = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();
    if (!portfolio) {
      portfolio = await Portfolio.create({ items: [] });
    }
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPortfolioItem = async (req, res) => {
  try {
    const { title, description, image, category, tags, link, github } = req.body;

    let portfolio = await Portfolio.findOne();
    if (!portfolio) {
      portfolio = await Portfolio.create({
        items: [{ title, description, image, category, tags, link, github }],
      });
    } else {
      portfolio.items.push({ title, description, image, category, tags, link, github });
      await portfolio.save();
    }

    res.status(201).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePortfolioItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { title, description, category, image } = req.body;

    const portfolio = await Portfolio.findOne();
    const item = portfolio.items.find((i) => i._id.toString() === itemId);

    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    // Allow updating all fields including images
    item.title = title || item.title;
    item.description = description || item.description;
    item.category = category || item.category;
    item.image = image || item.image;

    await portfolio.save();
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSectionInfo = async (req, res) => {
  try {
    const { sectionTitle, sectionDescription } = req.body;

    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    portfolio.sectionTitle = sectionTitle || portfolio.sectionTitle;
    portfolio.sectionDescription = sectionDescription || portfolio.sectionDescription;

    await portfolio.save();
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePortfolioItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const portfolio = await Portfolio.findOne();
    portfolio.items = portfolio.items.filter((i) => i._id.toString() !== itemId);

    await portfolio.save();
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
