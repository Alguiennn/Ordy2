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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payments_entity_1 = require("./payments.entity");
const customer_entity_1 = require("../customers/customer.entity");
const business_entity_1 = require("../business/business.entity");
let PaymentsService = class PaymentsService {
    paymentRepository;
    customerRepository;
    businessRepository;
    constructor(paymentRepository, customerRepository, businessRepository) {
        this.paymentRepository = paymentRepository;
        this.customerRepository = customerRepository;
        this.businessRepository = businessRepository;
    }
    async create(createPaymentDto) {
        const customer = await this.customerRepository.findOne({
            where: { id: createPaymentDto.customerId },
        });
        if (!customer) {
            throw new common_1.NotFoundException('Cliente no encontrado');
        }
        const business = await this.businessRepository.findOne({
            where: { id: createPaymentDto.businessId },
        });
        if (!business) {
            throw new common_1.NotFoundException('Negocio no encontrado');
        }
        const payment = this.paymentRepository.create({
            code: createPaymentDto.code,
            amount: createPaymentDto.amount,
            method: createPaymentDto.method,
            date: createPaymentDto.date,
            status: createPaymentDto.status,
            customer,
            business,
        });
        return await this.paymentRepository.save(payment);
    }
    async findAll() {
        return await this.paymentRepository.find({
            relations: ['customer', 'business'],
        });
    }
    async findOne(id) {
        const payment = await this.paymentRepository.findOne({
            where: { id },
            relations: ['customer', 'business'],
        });
        if (!payment) {
            throw new common_1.NotFoundException('Pago no encontrado');
        }
        return payment;
    }
    async update(id, updatePaymentDto) {
        const payment = await this.findOne(id);
        if (updatePaymentDto.customerId) {
            const customer = await this.customerRepository.findOne({
                where: { id: updatePaymentDto.customerId },
            });
            if (!customer) {
                throw new common_1.NotFoundException('Cliente no encontrado');
            }
            payment.customer = customer;
        }
        if (updatePaymentDto.businessId) {
            const business = await this.businessRepository.findOne({
                where: { id: updatePaymentDto.businessId },
            });
            if (!business) {
                throw new common_1.NotFoundException('Negocio no encontrado');
            }
            payment.business = business;
        }
        Object.assign(payment, {
            code: updatePaymentDto.code ?? payment.code,
            amount: updatePaymentDto.amount ?? payment.amount,
            method: updatePaymentDto.method ?? payment.method,
            date: updatePaymentDto.date ?? payment.date,
            status: updatePaymentDto.status ?? payment.status,
        });
        return await this.paymentRepository.save(payment);
    }
    async remove(id) {
        const payment = await this.findOne(id);
        return await this.paymentRepository.remove(payment);
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payments_entity_1.Payment)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(business_entity_1.Business)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map