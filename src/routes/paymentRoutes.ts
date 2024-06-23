import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = Router();

router.post('/', PaymentController.createPayment);
router.get('/', PaymentController.getAllPayments);
router.get('/:id', PaymentController.getPaymentById);
router.put('/:id', PaymentController.updatePayment);
router.delete('/:id', PaymentController.deletePayment);

export default router;
