import { Request, Response } from 'express';
import { SubEventService } from '../services/subEventService';

export class SubEventController {
  static async createSubEvent(req: Request, res: Response) {
    try {
      const subEvent = await SubEventService.createSubEvent(req.body);
      res.status(201).json(subEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllSubEvents(req: Request, res: Response) {
    try {
      const subEvents = await SubEventService.getAllSubEvents();
      res.status(200).json(subEvents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSubEventById(req: Request, res: Response) {
    try {
      const subEvent = await SubEventService.getSubEventById(parseInt(req.params.id));
      if (subEvent) {
        res.status(200).json(subEvent);
      } else {
        res.status(404).json({ message: 'Sub event not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateSubEvent(req: Request, res: Response) {
    try {
      const subEvent = await SubEventService.updateSubEvent(parseInt(req.params.id), req.body);
      res.status(200).json(subEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteSubEvent(req: Request, res: Response) {
    try {
      await SubEventService.deleteSubEvent(parseInt(req.params.id));
      res.status(204).json({ message: 'Sub event deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
