"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const appointments_module_1 = require("./appointments/appointments.module");
const business_module_1 = require("./business/business.module");
const customers_module_1 = require("./customers/customers.module");
const payments_module_1 = require("./payments/payments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'data/database.sqlite',
                autoLoadEntities: true,
                synchronize: true,
            }),
            appointments_module_1.AppointmentsModule,
            business_module_1.BusinessModule,
            customers_module_1.CustomersModule,
            payments_module_1.PaymentsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map