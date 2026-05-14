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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
let CustomersService = class CustomersService {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    findAll() {
        return this.customerRepository.find({
            relations: ['business'],
            order: {
                name: 'ASC',
            },
        });
    }
    findOne(id) {
        return this.customerRepository.findOne({
            where: { id },
            relations: ['business'],
        });
    }
    async create(createCustomersDto) {
        const customer = this.customerRepository.create({
            code: createCustomersDto.code,
            name: createCustomersDto.name,
            phone: createCustomersDto.phone,
            email: createCustomersDto.email,
            business: {
                id: createCustomersDto.businessId,
            },
        });
        return this.customerRepository.save(customer);
    }
    async update(id, updateCustomersDto) {
        const customer = await this.customerRepository.findOne({
            where: { id },
            relations: ['business'],
        });
        if (!customer) {
            throw new common_1.NotFoundException(`No existe el cliente con id ${id}`);
        }
        customer.code =
            updateCustomersDto.code ?? customer.code;
        customer.name =
            updateCustomersDto.name ?? customer.name;
        customer.phone =
            updateCustomersDto.phone ?? customer.phone;
        customer.email =
            updateCustomersDto.email ?? customer.email;
        if (updateCustomersDto.businessId) {
            customer.business = {
                id: updateCustomersDto.businessId,
            };
        }
        return this.customerRepository.save(customer);
    }
    async remove(id) {
        const customer = await this.customerRepository.findOneBy({
            id,
        });
        if (!customer) {
            throw new common_1.NotFoundException(`No existe el cliente con id ${id}`);
        }
        await this.customerRepository.remove(customer);
        return {
            message: `Cliente ${id} eliminado correctamente`,
        };
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
//# sourceMappingURL=customers.service.js.map