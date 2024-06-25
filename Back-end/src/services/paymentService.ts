import { Payment } from '../models/Payment';

export class PaymentService {
  static async createPayment(data: any) {
    return await Payment.create(data);
  }

  static async getAllPayments() {
    return await Payment.findAll();
  }

  static async getPaymentById(id: number) {
    return await Payment.findByPk(id);
  }

  static async updatePayment(id: number, data: any) {
    const payment = await Payment.findByPk(id);
    if (payment) {
      return await payment.update(data);
    }
    throw new Error('Payment not found');
  }

  static async deletePayment(id: number) {
    const payment = await Payment.findByPk(id);
    if (payment) {
      await payment.destroy();
    } else {
      throw new Error('Payment not found');
    }
  }
}
