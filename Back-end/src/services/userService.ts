import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'The secret will be in a .env file'; 

export class UserService {
  static async createUser(data: any) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    return await User.create(data);
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id: number) {
    return await User.findByPk(id);
  }

  static async updateUser(id: number, data: any) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(data);
    }
    throw new Error('User not found');
  }

  static async deleteUser(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
    } else {
      throw new Error('User not found');
    }
  }

  static async register(name: string, email: string, password: string) {
    let user = await User.findOne({ where: { email } });
    if (user) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({ name, email, password: hashedPassword });

    const payload = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid Credentials');
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }
}
