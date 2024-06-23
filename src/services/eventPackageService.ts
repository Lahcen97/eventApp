import { EventPackage } from '../models/EventPackage';

export class EventPackageService {
  static async createEventPackage(data: any) {
    return await EventPackage.create(data);
  }

  static async getAllEventPackages() {
    return await EventPackage.findAll();
  }

  static async getEventPackageById(id: number) {
    return await EventPackage.findByPk(id);
  }

  static async updateEventPackage(id: number, data: any) {
    const eventPackage = await EventPackage.findByPk(id);
    if (eventPackage) {
      return await eventPackage.update(data);
    }
    throw new Error('Package not found');
  }

  static async deleteEventPackage(id: number) {
    const eventPackage = await EventPackage.findByPk(id);
    if (eventPackage) {
      await eventPackage.destroy();
    } else {
      throw new Error('Package not found');
    }
  }
}
