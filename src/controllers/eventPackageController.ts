import { Request, Response } from 'express';
import { EventPackageService } from '../services/eventPackageService';

export class EventPackageController {
  static async createEventPackage(req: Request, res: Response) {
    try {
      const eventPackage = await EventPackageService.createEventPackage(req.body);
      res.status(201).json(eventPackage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllEventPackages(req: Request, res: Response) {
    try {
      const eventPackages = await EventPackageService.getAllEventPackages();
      res.status(200).json(eventPackages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEventPackageById(req: Request, res: Response) {
    try {
      const eventPackage = await EventPackageService.getEventPackageById(parseInt(req.params.id));
      if (eventPackage) {
        res.status(200).json(eventPackage);
      } else {
        res.status(404).json({ message: 'Package not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateEventPackage(req: Request, res: Response) {
    try {
      const eventPackage = await EventPackageService.updateEventPackage(parseInt(req.params.id), req.body);
      res.status(200).json(eventPackage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteEventPackage(req: Request, res: Response) {
    try {
      await EventPackageService.deleteEventPackage(parseInt(req.params.id));
      res.status(204).json({ message: 'Package deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

