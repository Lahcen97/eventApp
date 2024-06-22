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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Event_1 = require("./Event");
const Favorite_1 = require("./Favorite");
const UserFollow_1 = require("./UserFollow");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "oauth_provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "oauth_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Event_1.Event, (event) => event.user),
    __metadata("design:type", Array)
], User.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Favorite_1.Favorite, (favorite) => favorite.user),
    __metadata("design:type", Array)
], User.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserFollow_1.UserFollow, (userFollow) => userFollow.follower),
    __metadata("design:type", Array)
], User.prototype, "following", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserFollow_1.UserFollow, (userFollow) => userFollow.following),
    __metadata("design:type", Array)
], User.prototype, "followers", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
//# sourceMappingURL=User.js.map