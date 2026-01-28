const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  try {
    let clients = await Client.findOne();
    if (!clients) {
      clients = await Client.create({ clients: [] });
    }
    res.status(200).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addClient = async (req, res) => {
  try {
    const { logo } = req.body;

    if (!logo) {
      return res.status(400).json({ message: 'Logo URL is required' });
    }

    let clients = await Client.findOne();
    if (!clients) {
      clients = await Client.create({
        clients: [{ logo }],
      });
    } else {
      clients.clients.push({ logo });
      await clients.save();
    }

    res.status(201).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addClientWithUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('File uploaded:', req.file);
    const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';
    const logoUrl = `${serverUrl}/uploads/logos/${req.file.filename}`;
    console.log('Logo URL:', logoUrl);

    let clients = await Client.findOne();
    if (!clients) {
      clients = await Client.create({
        clients: [{ logo: logoUrl }],
      });
    } else {
      clients.clients.push({ logo: logoUrl });
      await clients.save();
    }

    console.log('Updated clients document:', clients);
    res.status(201).json({ success: true, data: clients });
  } catch (error) {
    console.error('Error in addClientWithUpload:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { logo } = req.body;

    const clients = await Client.findOne();
    const client = clients.clients.find((c) => c._id.toString() === clientId);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    client.logo = logo;

    await clients.save();
    res.status(200).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { clientId } = req.params;

    const clients = await Client.findOne();
    clients.clients = clients.clients.filter((c) => c._id.toString() !== clientId);

    await clients.save();
    res.status(200).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePartnerInfo = async (req, res) => {
  try {
    const { partnerTitle, partnerDescription, partnerButtonText } = req.body;

    let clientsDoc = await Client.findOne();
    if (!clientsDoc) {
      clientsDoc = await Client.create({
        clients: [],
        partnerTitle,
        partnerDescription,
        partnerButtonText,
      });
    } else {
      clientsDoc.partnerTitle = partnerTitle;
      clientsDoc.partnerDescription = partnerDescription;
      clientsDoc.partnerButtonText = partnerButtonText;
      await clientsDoc.save();
    }

    res.status(200).json({ success: true, data: clientsDoc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
