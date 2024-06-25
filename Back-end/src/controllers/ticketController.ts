import { Request, Response } from 'express';
import { TicketService } from '../services/ticketService';

export class TicketController {
  static async createTicket(req: Request, res: Response) {
    try {
      const ticket = await TicketService.createTicket(req.body);
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketService.getAllTickets();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTicketById(req: Request, res: Response) {
    try {
      const ticket = await TicketService.getTicketById(parseInt(req.params.id));
      if (ticket) {
        res.status(200).json(ticket);
      } else {
        res.status(404).json({ message: 'Ticket not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTicket(req: Request, res: Response) {
    try {
      const ticket = await TicketService.updateTicket(parseInt(req.params.id), req.body);
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTicket(req: Request, res: Response) {
    try {
      await TicketService.deleteTicket(parseInt(req.params.id));
      res.status(204).json({ message: 'Ticket deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
