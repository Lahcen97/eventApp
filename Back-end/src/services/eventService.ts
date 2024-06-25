import { Event } from '../models/Event';

export class EventService {
  static async createEvent(data: any) {
    return await Event.create(data);
  }

  static async getAllEvents() {
    return await Event.findAll();
  }

  static async getEventById(id: number) {
    return await Event.findByPk(id);
  }

  static async updateEvent(id: number, data: any) {
    const event = await Event.findByPk(id);
    if (event) {
      return await event.update(data);
    }
    throw new Error('Event not found');
  }

  static async deleteEvent(id: number) {
    const event = await Event.findByPk(id);
    if (event) {
      await event.destroy();
    } else {
      throw new Error('Event not found');
    }
  }
}
