import { Router } from 'express';
import { UserController } from '../controllers/userController';
import auth from '../middleware/auth';

const router = Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id',auth, UserController.getUserById);
router.put('/:id',auth, UserController.updateUser);
router.delete('/:id',auth, UserController.deleteUser);

export default router;
