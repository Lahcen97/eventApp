import { EventDocument } from '../models/EventDocument';

export class EventDocumentService {
  static async createEventDocument(data: any) {
    return await EventDocument.create(data);
  }

  static async getAllEventDocuments() {
    return await EventDocument.findAll();
  }

  static async getEventDocumentById(id: number) {
    return await EventDocument.findByPk(id);
  }

  static async updateEventDocument(id: number, data: any) {
    const eventDocument = await EventDocument.findByPk(id);
    if (eventDocument) {
      return await eventDocument.update(data);
    }
    throw new Error('Event document not found');
  }

  static async deleteEventDocument(id: number) {
    const eventDocument = await EventDocument.findByPk(id);
    if (eventDocument) {
      await eventDocument.destroy();
    } else {
      throw new Error('Event document not found');
    }
  }
}
