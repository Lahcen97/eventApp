import { Request, Response } from 'express';
import { EventService } from '../services/eventService';

export class EventController {
  static async createEvent(req: Request, res: Response) {
    try {
      const event = await EventService.createEvent(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllEvents(req: Request, res: Response) {
    try {
      const events = await EventService.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEventById(req: Request, res: Response) {
    try {
      const event = await EventService.getEventById(parseInt(req.params.id));
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateEvent(req: Request, res: Response) {
    try {
      const event = await EventService.updateEvent(parseInt(req.params.id), req.body);
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteEvent(req: Request, res: Response) {
    try {
      await EventService.deleteEvent(parseInt(req.params.id));
      res.status(204).json({ message: 'Event deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
