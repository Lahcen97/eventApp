"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const EventDocument_1 = require("./EventDocument");
const FeaturedEvent_1 = require("./FeaturedEvent");
const Ticket_1 = require("./Ticket");
const Package_1 = require("./Package");
const Payment_1 = require("./Payment");
const SubEvent_1 = require("./SubEvent");
const Favorite_1 = require("./Favorite");
let Event = class Event {
};
exports.Event = Event;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.events),
    __metadata("design:type", User_1.User)
], Event.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Event.prototype, "is_approved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Event.prototype, "is_paid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Event.prototype, "is_featured", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Event.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Event.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EventDocument_1.EventDocument, eventDocument => eventDocument.event),
    __metadata("design:type", Array)
], Event.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FeaturedEvent_1.FeaturedEvent, featuredEvent => featuredEvent.event),
    __metadata("design:type", Array)
], Event.prototype, "featuredEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ticket_1.Ticket, ticket => ticket.event),
    __metadata("design:type", Array)
], Event.prototype, "tickets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Package_1.Package, pkg => pkg.event),
    __metadata("design:type", Array)
], Event.prototype, "packages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Payment_1.Payment, payment => payment.event),
    __metadata("design:type", Array)
], Event.prototype, "payments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SubEvent_1.SubEvent, subEvent => subEvent.event),
    __metadata("design:type", Array)
], Event.prototype, "subEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Favorite_1.Favorite, favorite => favorite.event),
    __metadata("design:type", Array)
], Event.prototype, "favorites", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('events')
], Event);
//# sourceMappingURL=Event.js.map