import { Router } from 'express';
import { UserFollow } from '../models/UserFollow';

const router = Router();

// Create a new user follow
router.post('/', async (req, res) => {
  try {
    const userFollow = await UserFollow.create(req.body);
    res.status(201).json(userFollow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all user follows
router.get('/', async (req, res) => {
  try {
    const userFollows = await UserFollow.findAll();
    res.status(200).json(userFollows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single user follow by ID
router.get('/:id', async (req, res) => {
  try {
    const userFollow = await UserFollow.findByPk(req.params.id);
    if (userFollow) {
      res.status(200).json(userFollow);
    } else {
      res.status(404).json({ message: 'User follow not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user follow by ID
router.put('/:id', async (req, res) => {
  try {
    const userFollow = await UserFollow.findByPk(req.params.id);
    if (userFollow) {
      await userFollow.update(req.body);
      res.status(200).json(userFollow);
    } else {
      res.status(404).json({ message: 'User follow not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user follow by ID
router.delete('/:id', async (req, res) => {
  try {
    const userFollow = await UserFollow.findByPk(req.params.id);
    if (userFollow) {
      await userFollow.destroy();
      res.status(204).json({ message: 'User follow deleted' });
    } else {
      res.status(404).json({ message: 'User follow not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
