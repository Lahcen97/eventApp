import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Event } from '../models/Event';
import { Ticket } from '../models/Ticket';
import { EventPackage } from '../models/EventPackage';
import { PackageItem } from '../models/PackageItem';
import { Payment } from '../models/Payment';
import { SubEvent } from '../models/SubEvent';
import { UserFollow } from '../models/UserFollow';
import { Favorite } from '../models/Favorite';
import { FeaturedEvent } from '../models/FeaturedEvent';
import { EventDocument } from '../models/EventDocument';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  models: [User, Event, Ticket, EventPackage, PackageItem, Payment, SubEvent, UserFollow, Favorite, FeaturedEvent, EventDocument],
});

export { sequelize };
