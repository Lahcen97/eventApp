import { Router } from 'express';
import { EventDocument } from '../models/EventDocument';

const router = Router();

// Create a new event document
router.post('/', async (req, res) => {
  try {
    const eventDocument = await EventDocument.create(req.body);
    res.status(201).json(eventDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all event documents
router.get('/', async (req, res) => {
  try {
    const eventDocuments = await EventDocument.findAll();
    res.status(200).json(eventDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single event document by ID
router.get('/:id', async (req, res) => {
  try {
    const eventDocument = await EventDocument.findByPk(req.params.id);
    if (eventDocument) {
      res.status(200).json(eventDocument);
    } else {
      res.status(404).json({ message: 'Event document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an event document by ID
router.put('/:id', async (req, res) => {
  try {
    const eventDocument = await EventDocument.findByPk(req.params.id);
    if (eventDocument) {
      await eventDocument.update(req.body);
      res.status(200).json(eventDocument);
    } else {
      res.status(404).json({ message: 'Event document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an event document by ID
router.delete('/:id', async (req, res) => {
  try {
    const eventDocument = await EventDocument.findByPk(req.params.id);
    if (eventDocument) {
      await eventDocument.destroy();
      res.status(204).json({ message: 'Event document deleted' });
    } else {
      res.status(404).json({ message: 'Event document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
