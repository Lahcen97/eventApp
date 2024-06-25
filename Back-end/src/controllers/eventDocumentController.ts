import { Request, Response } from 'express';
import { EventDocumentService } from '../services/eventDocumentService';

export class EventDocumentController {
  static async createEventDocument(req: Request, res: Response) {
    try {
      const eventDocument = await EventDocumentService.createEventDocument(req.body);
      res.status(201).json(eventDocument);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllEventDocuments(req: Request, res: Response) {
    try {
      const eventDocuments = await EventDocumentService.getAllEventDocuments();
      res.status(200).json(eventDocuments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEventDocumentById(req: Request, res: Response) {
    try {
      const eventDocument = await EventDocumentService.getEventDocumentById(parseInt(req.params.id));
      if (eventDocument) {
        res.status(200).json(eventDocument);
      } else {
        res.status(404).json({ message: 'Event document not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateEventDocument(req: Request, res: Response) {
    try {
      const eventDocument = await EventDocumentService.updateEventDocument(parseInt(req.params.id), req.body);
      res.status(200).json(eventDocument);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteEventDocument(req: Request, res: Response) {
    try {
      await EventDocumentService.deleteEventDocument(parseInt(req.params.id));
      res.status(204).json({ message: 'Event document deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
