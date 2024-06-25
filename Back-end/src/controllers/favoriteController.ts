import { Request, Response } from 'express';
import { FavoriteService } from '../services/favoriteService';

export class FavoriteController {
  static async createFavorite(req: Request, res: Response) {
    try {
      const favorite = await FavoriteService.createFavorite(req.body);
      res.status(201).json(favorite);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllFavorites(req: Request, res: Response) {
    try {
      const favorites = await FavoriteService.getAllFavorites();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFavoriteById(req: Request, res: Response) {
    try {
      const favorite = await FavoriteService.getFavoriteById(parseInt(req.params.id));
      if (favorite) {
        res.status(200).json(favorite);
      } else {
        res.status(404).json({ message: 'Favorite not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateFavorite(req: Request, res: Response) {
    try {
      const favorite = await FavoriteService.updateFavorite(parseInt(req.params.id), req.body);
      res.status(200).json(favorite);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteFavorite(req: Request, res: Response) {
    try {
      await FavoriteService.deleteFavorite(parseInt(req.params.id));
      res.status(204).json({ message: 'Favorite deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
