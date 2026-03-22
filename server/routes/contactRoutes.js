import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @desc    Get all messages
// @route   GET /api/contact
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const messages = await Message.find({}).sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        next(error);
    }
});

// @desc    Post a new contact message
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        
        if(!name || !email || !message) {
            res.status(400);
            throw new Error('Please provide all fields');
        }

        const newMessage = await Message.create({ name, email, message });
        res.status(201).json(newMessage);
    } catch (error) {
        next(error);
    }
});

export default router;
