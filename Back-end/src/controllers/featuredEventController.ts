import { Request, Response } from 'express';
import { FeaturedEventService } from '../services/featuredEventService';

export class FeaturedEventController {
  static async createFeaturedEvent(req: Request, res: Response) {
    try {
      const featuredEvent = await FeaturedEventService.createFeaturedEvent(req.body);
      res.status(201).json(featuredEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllFeaturedEvents(req: Request, res: Response) {
    try {
      const featuredEvents = await FeaturedEventService.getAllFeaturedEvents();
      res.status(200).json(featuredEvents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFeaturedEventById(req: Request, res: Response) {
    try {
      const featuredEvent = await FeaturedEventService.getFeaturedEventById(parseInt(req.params.id));
      if (featuredEvent) {
        res.status(200).json(featuredEvent);
      } else {
        res.status(404).json({ message: 'Featured event not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateFeaturedEvent(req: Request, res: Response) {
    try {
      const featuredEvent = await FeaturedEventService.updateFeaturedEvent(parseInt(req.params.id), req.body);
      res.status(200).json(featuredEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteFeaturedEvent(req: Request, res: Response) {
    try {
      await FeaturedEventService.deleteFeaturedEvent(parseInt(req.params.id));
      res.status(204).json({ message: 'Featured event deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
