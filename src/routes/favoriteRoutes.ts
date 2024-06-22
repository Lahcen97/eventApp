import { Router } from 'express';
import { Favorite } from '../models/Favorite';

const router = Router();

// Create a new favorite
router.post('/', async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all favorites
router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single favorite by ID
router.get('/:id', async (req, res) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id);
    if (favorite) {
      res.status(200).json(favorite);
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a favorite by ID
router.put('/:id', async (req, res) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id);
    if (favorite) {
      await favorite.update(req.body);
      res.status(200).json(favorite);
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a favorite by ID
router.delete('/:id', async (req, res) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id);
    if (favorite) {
      await favorite.destroy();
      res.status(204).json({ message: 'Favorite deleted' });
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
