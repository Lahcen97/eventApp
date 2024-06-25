import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';

export class PaymentController {
  static async createPayment(req: Request, res: Response) {
    try {
      const payment = await PaymentService.createPayment(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllPayments(req: Request, res: Response) {
    try {
      const payments = await PaymentService.getAllPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPaymentById(req: Request, res: Response) {
    try {
      const payment = await PaymentService.getPaymentById(parseInt(req.params.id));
      if (payment) {
        res.status(200).json(payment);
      } else {
        res.status(404).json({ message: 'Payment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePayment(req: Request, res: Response) {
    try {
      const payment = await PaymentService.updatePayment(parseInt(req.params.id), req.body);
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePayment(req: Request, res: Response) {
    try {
      await PaymentService.deletePayment(parseInt(req.params.id));
      res.status(204).json({ message: 'Payment deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
