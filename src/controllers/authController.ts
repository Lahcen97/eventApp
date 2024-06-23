import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class AuthController {
  static async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const { user, token } = await UserService.register(name, email, password);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { user, token } = await UserService.login(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
