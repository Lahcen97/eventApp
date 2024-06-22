import { Router } from 'express';
import { EventPackage } from '../models/EventPackage';

const router = Router();

// Create a new package
router.post('/', async (req, res) => {
  try {
    const eventPackage = await EventPackage.create(req.body);
    res.status(201).json(eventPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all packages
router.get('/', async (req, res) => {
  try {
    const packages = await EventPackage.findAll();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single package by ID
router.get('/:id', async (req, res) => {
  try {
    const eventPackage = await EventPackage.findByPk(req.params.id);
    if (eventPackage) {
      res.status(200).json(eventPackage);
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a package by ID
router.put('/:id', async (req, res) => {
  try {
    const eventPackage = await EventPackage.findByPk(req.params.id);
    if (eventPackage) {
      await eventPackage.update(req.body);
      res.status(200).json(eventPackage);
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a package by ID
router.delete('/:id', async (req, res) => {
  try {
    const eventPackage = await EventPackage.findByPk(req.params.id);
    if (eventPackage) {
      await eventPackage.destroy();
      res.status(204).json({ message: 'Package deleted' });
    } else {
      res.status(404).json({ message: 'Package not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
