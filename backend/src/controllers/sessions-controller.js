/* eslint-disable no-underscore-dangle */
const Sessions = require('../models/Sessions');

const sessionsCtrl = {
  get: async (_, res) => {
    try {
      res.status(200).json(await Sessions.find());
    }
    catch (error) {
      res.status(500).json({ message: 'Error while log out' });
    }
  },
  getByUser: async (req, res) => {
    const { userId } = req.params;
    try {
      res.status(200).json(await Sessions.find({ userId }));
    }
    catch (error) {
      res.status(500).json({ message: 'Error while log out' });
    }
  }
};

module.exports = sessionsCtrl;
