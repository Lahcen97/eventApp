import { SubEvent } from '../models/SubEvent';

export class SubEventService {
  static async createSubEvent(data: any) {
    return await SubEvent.create(data);
  }

  static async getAllSubEvents() {
    return await SubEvent.findAll();
  }

  static async getSubEventById(id: number) {
    return await SubEvent.findByPk(id);
  }

  static async updateSubEvent(id: number, data: any) {
    const subEvent = await SubEvent.findByPk(id);
    if (subEvent) {
      return await subEvent.update(data);
    }
    throw new Error('Sub event not found');
  }

  static async deleteSubEvent(id: number) {
    const subEvent = await SubEvent.findByPk(id);
    if (subEvent) {
      await subEvent.destroy();
    } else {
      throw new Error('Sub event not found');
    }
  }
}
