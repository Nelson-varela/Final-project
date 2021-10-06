
const Novelty = require('../models/Novelty.js');

const noveltyCtrl = {};

noveltyCtrl.getNovelties = async (req, res) => { 
    try {
        const novelty = await Novelty.find();
                
        res.status(200).json(novelty);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

noveltyCtrl.getNovelty = async (req, res) => { 
    const { id } = req.params;

    try {
        const novelty = await Novelty.findById(id);
        
        res.status(200).json(novelty);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


noveltyCtrl.createNovelty = async (req, res) => {
    const post = req.body;

    const newNovelty = new Novelty({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await NewNovelty.save();

        res.status(201).json(newNovelty);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = noveltyCtrl;