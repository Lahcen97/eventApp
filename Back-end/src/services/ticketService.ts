import { Ticket } from '../models/Ticket';

export class TicketService {
  static async createTicket(data: any) {
    return await Ticket.create(data);
  }

  static async getAllTickets() {
    return await Ticket.findAll();
  }

  static async getTicketById(id: number) {
    return await Ticket.findByPk(id);
  }

  static async updateTicket(id: number, data: any) {
    const ticket = await Ticket.findByPk(id);
    if (ticket) {
      return await ticket.update(data);
    }
    throw new Error('Ticket not found');
  }

  static async deleteTicket(id: number) {
    const ticket = await Ticket.findByPk(id);
    if (ticket) {
      await ticket.destroy();
    } else {
      throw new Error('Ticket not found');
    }
  }
}
