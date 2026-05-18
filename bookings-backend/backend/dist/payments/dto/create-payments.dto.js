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
exports.CreatePaymentDto = void 0;
const class_validator_1 = require("class-validator");
const payments_entity_1 = require("../payments.entity");
class CreatePaymentDto {
    code;
    amount;
    method;
    date;
    status;
    customerId;
    businessId;
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payments_entity_1.PaymentStatus),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "businessId", void 0);
//# sourceMappingURL=create-payments.dto.js.map