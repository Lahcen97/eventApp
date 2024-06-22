import { Router } from 'express';
import { PackageItem } from '../models/PackageItem';

const router = Router();

// Create a new package item
router.post('/', async (req, res) => {
  try {
    const packageItem = await PackageItem.create(req.body);
    res.status(201).json(packageItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all package items
router.get('/', async (req, res) => {
  try {
    const packageItems = await PackageItem.findAll();
    res.status(200).json(packageItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single package item by ID
router.get('/:id', async (req, res) => {
  try {
    const packageItem = await PackageItem.findByPk(req.params.id);
    if (packageItem) {
      res.status(200).json(packageItem);
    } else {
      res.status(404).json({ message: 'Package item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a package item by ID
router.put('/:id', async (req, res) => {
  try {
    const packageItem = await PackageItem.findByPk(req.params.id);
    if (packageItem) {
      await packageItem.update(req.body);
      res.status(200).json(packageItem);
    } else {
      res.status(404).json({ message: 'Package item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a package item by ID
router.delete('/:id', async (req, res) => {
  try {
    const packageItem = await PackageItem.findByPk(req.params.id);
    if (packageItem) {
      await packageItem.destroy();
      res.status(204).json({ message: 'Package item deleted' });
    } else {
      res.status(404).json({ message: 'Package item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
