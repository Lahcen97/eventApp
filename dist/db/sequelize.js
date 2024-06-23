"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const Event_1 = require("../models/Event");
const EventDocument_1 = require("../models/EventDocument");
const FeaturedEvent_1 = require("../models/FeaturedEvent");
const Ticket_1 = require("../models/Ticket");
const Package_1 = require("../models/Package");
const PackageItem_1 = require("../models/PackageItem");
const Payment_1 = require("../models/Payment");
const SubEvent_1 = require("../models/SubEvent");
const Favorite_1 = require("../models/Favorite");
const UserFollow_1 = require("../models/UserFollow");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    models: [User_1.User, Event_1.Event, EventDocument_1.EventDocument, FeaturedEvent_1.FeaturedEvent, Ticket_1.Ticket, Package_1.Package, PackageItem_1.PackageItem, Payment_1.Payment, SubEvent_1.SubEvent, Favorite_1.Favorite, UserFollow_1.UserFollow],
});
exports.sequelize = sequelize;
//# sourceMappingURL=sequelize.js.map