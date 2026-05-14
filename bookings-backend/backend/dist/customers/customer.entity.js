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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../business/business.entity");
const appointment_entity_1 = require("../appointments/appointment.entity");
const payments_entity_1 = require("../payments/payments.entity");
let Customer = class Customer {
    id;
    code;
    name;
    phone;
    email;
    business;
    appointments;
    payments;
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, unique: true }),
    __metadata("design:type", String)
], Customer.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.Business, business => business.customers),
    (0, typeorm_1.JoinColumn)({ name: 'businessId' }),
    __metadata("design:type", business_entity_1.Business)
], Customer.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, appointment => appointment.customer),
    __metadata("design:type", Array)
], Customer.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payments_entity_1.Payment, payment => payment.customer),
    __metadata("design:type", Array)
], Customer.prototype, "payments", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);
//# sourceMappingURL=customer.entity.js.map