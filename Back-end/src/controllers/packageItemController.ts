import { Request, Response } from 'express';
import { PackageItemService } from '../services/packageItemService';

export class PackageItemController {
  static async createPackageItem(req: Request, res: Response) {
    try {
      const packageItem = await PackageItemService.createPackageItem(req.body);
      res.status(201).json(packageItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllPackageItems(req: Request, res: Response) {
    try {
      const packageItems = await PackageItemService.getAllPackageItems();
      res.status(200).json(packageItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPackageItemById(req: Request, res: Response) {
    try {
      const packageItem = await PackageItemService.getPackageItemById(parseInt(req.params.id));
      if (packageItem) {
        res.status(200).json(packageItem);
      } else {
        res.status(404).json({ message: 'Package item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePackageItem(req: Request, res: Response) {
    try {
      const packageItem = await PackageItemService.updatePackageItem(parseInt(req.params.id), req.body);
      res.status(200).json(packageItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePackageItem(req: Request, res: Response) {
    try {
      await PackageItemService.deletePackageItem(parseInt(req.params.id));
      res.status(204).json({ message: 'Package item deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
