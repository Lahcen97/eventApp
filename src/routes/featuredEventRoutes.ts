import { Router } from 'express';
import { FeaturedEvent } from '../models/FeaturedEvent';

const router = Router();

// Create a new featured event
router.post('/', async (req, res) => {
  try {
    const featuredEvent = await FeaturedEvent.create(req.body);
    res.status(201).json(featuredEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all featured events
router.get('/', async (req, res) => {
  try {
    const featuredEvents = await FeaturedEvent.findAll();
    res.status(200).json(featuredEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single featured event by ID
router.get('/:id', async (req, res) => {
  try {
    const featuredEvent = await FeaturedEvent.findByPk(req.params.id);
    if (featuredEvent) {
      res.status(200).json(featuredEvent);
    } else {
      res.status(404).json({ message: 'Featured event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a featured event by ID
router.put('/:id', async (req, res) => {
  try {
    const featuredEvent = await FeaturedEvent.findByPk(req.params.id);
    if (featuredEvent) {
      await featuredEvent.update(req.body);
      res.status(200).json(featuredEvent);
    } else {
      res.status(404).json({ message: 'Featured event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a featured event by ID
router.delete('/:id', async (req, res) => {
  try {
    const featuredEvent = await FeaturedEvent.findByPk(req.params.id);
    if (featuredEvent) {
      await featuredEvent.destroy();
      res.status(204).json({ message: 'Featured event deleted' });
    } else {
      res.status(404).json({ message: 'Featured event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
