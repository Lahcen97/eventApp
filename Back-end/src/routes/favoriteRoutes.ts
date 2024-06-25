import { Router } from 'express';
import { FavoriteController } from '../controllers/favoriteController';

const router = Router();

router.post('/', FavoriteController.createFavorite);
router.get('/', FavoriteController.getAllFavorites);
router.get('/:id', FavoriteController.getFavoriteById);
router.put('/:id', FavoriteController.updateFavorite);
router.delete('/:id', FavoriteController.deleteFavorite);

export default router;
