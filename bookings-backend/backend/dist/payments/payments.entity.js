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
exports.Payment = exports.PaymentStatus = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../customers/customer.entity");
const business_entity_1 = require("../business/business.entity");
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
let Payment = class Payment {
    id;
    code;
    amount;
    method;
    date;
    status;
    customer;
    business;
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 10,
        unique: true,
        nullable: true,
    }),
    __metadata("design:type", String)
], Payment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Payment.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Payment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: PaymentStatus.PENDING }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, customer => customer.payments),
    (0, typeorm_1.JoinColumn)({ name: 'customerId' }),
    __metadata("design:type", customer_entity_1.Customer)
], Payment.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.Business, business => business.payments),
    (0, typeorm_1.JoinColumn)({ name: 'businessId' }),
    __metadata("design:type", business_entity_1.Business)
], Payment.prototype, "business", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)()
], Payment);
//# sourceMappingURL=payments.entity.js.map