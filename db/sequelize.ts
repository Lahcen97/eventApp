import { Sequelize } from "sequelize-typescript";
import { User } from "../../models/User";
import { Event } from "../../models/Event";
import { EventDocument } from "../../models/EventDocument";
import { FeaturedEvent } from "../../models/FeaturedEvent";
import { Ticket } from "../../models/Ticket";
import { Package } from "../../models/Package";
import { PackageItem } from "../../models/PackageItem";
import { Payment } from "../../models/Payment";
import { SubEvent } from "../../models/SubEvent";
import { Favorite } from "../../models/Favorite";
import { UserFollow } from "../../models/UserFollow";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  models: [
    User,
    Event,
    EventDocument,
    FeaturedEvent,
    Ticket,
    Package,
    PackageItem,
    Payment,
    SubEvent,
    Favorite,
    UserFollow,
  ],
});

export { sequelize };
