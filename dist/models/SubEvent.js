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
exports.SubEvent = void 0;
const typeorm_1 = require("typeorm");
const Event_1 = require("./Event");
let SubEvent = class SubEvent {
};
exports.SubEvent = SubEvent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SubEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Event_1.Event, event => event.subEvents),
    __metadata("design:type", Event_1.Event)
], SubEvent.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SubEvent.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], SubEvent.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SubEvent.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], SubEvent.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], SubEvent.prototype, "is_paid", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], SubEvent.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SubEvent.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SubEvent.prototype, "updated_at", void 0);
exports.SubEvent = SubEvent = __decorate([
    (0, typeorm_1.Entity)('sub_events')
], SubEvent);
//# sourceMappingURL=SubEvent.js.map