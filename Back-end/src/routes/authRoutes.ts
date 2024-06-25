import express from 'express';
import { AuthController } from '../controllers/authController';

const router = express.Router();

// Route d'enregistrement
router.post('/register', AuthController.register);

// Route de connexion
router.post('/login', AuthController.login);

export default router;
