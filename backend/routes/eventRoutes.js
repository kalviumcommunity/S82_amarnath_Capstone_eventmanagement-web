const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getMyEvents } = require('../controllers/eventController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', getAllEvents);
router.get('/my', protect, getMyEvents);
router.post('/', protect, authorize('organizer'), createEvent);

module.exports = router;
