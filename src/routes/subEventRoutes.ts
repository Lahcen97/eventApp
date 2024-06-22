import { Router } from 'express';
import { SubEvent } from '../models/SubEvent';

const router = Router();

// Create a new sub event
router.post('/', async (req, res) => {
  try {
    const subEvent = await SubEvent.create(req.body);
    res.status(201).json(subEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all sub events
router.get('/', async (req, res) => {
  try {
    const subEvents = await SubEvent.findAll();
    res.status(200).json(subEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single sub event by ID
router.get('/:id', async (req, res) => {
  try {
    const subEvent = await SubEvent.findByPk(req.params.id);
    if (subEvent) {
      res.status(200).json(subEvent);
    } else {
      res.status(404).json({ message: 'Sub event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
}
});

// Update a sub event by ID
router.put('/:id', async (req, res) => {
  try {
    const subEvent = await SubEvent.findByPk(req.params.id);
    if (subEvent) {
      await subEvent.update(req.body);
      res.status(200).json(subEvent);
    } else {
      res.status(404).json({ message: 'Sub event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a sub event by ID
router.delete('/:id', async (req, res) => {
  try {
    const subEvent = await SubEvent.findByPk(req.params.id);
    if (subEvent) {
      await subEvent.destroy();
      res.status(204).json({ message: 'Sub event deleted' });
    } else {
      res.status(404).json({ message: 'Sub event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
