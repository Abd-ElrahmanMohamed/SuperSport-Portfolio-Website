const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    let services = await Service.findOne();
    if (!services) {
      // Create with empty array, pre-save middleware will add default services
      services = await Service.create({ services: [] });
    }
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addService = async (req, res) => {
  try {
    const { icon, title, description } = req.body;

    if (!icon || !title || !description) {
      return res.status(400).json({ message: 'Icon, title, and description are required' });
    }

    let services = await Service.findOne();
    if (!services) {
      services = await Service.create({ services: [] });
    }

    const newService = {
      icon,
      title,
      description,
    };

    services.services.push(newService);
    await services.save();

    res.status(201).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { title, description } = req.body; // Only title and description, icon is fixed

    const services = await Service.findOne();
    const service = services.services.find((s) => s._id.toString() === serviceId);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Only allow editing title and description, icon stays fixed
    service.title = title || service.title;
    service.description = description || service.description;

    await services.save();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSectionInfo = async (req, res) => {
  try {
    const { sectionTitle, sectionDescription, buttonText } = req.body;

    const services = await Service.findOne();
    if (!services) {
      return res.status(404).json({ message: 'Services not found' });
    }

    services.sectionTitle = sectionTitle || services.sectionTitle;
    services.sectionDescription = sectionDescription || services.sectionDescription;
    services.buttonText = buttonText || services.buttonText;

    await services.save();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const services = await Service.findOne();
    services.services = services.services.filter((s) => s._id.toString() !== serviceId);

    await services.save();
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
