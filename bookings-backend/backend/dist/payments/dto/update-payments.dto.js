"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_payments_dto_1 = require("./create-payments.dto");
class UpdatePaymentDto extends (0, mapped_types_1.PartialType)(create_payments_dto_1.CreatePaymentDto) {
}
exports.UpdatePaymentDto = UpdatePaymentDto;
//# sourceMappingURL=update-payments.dto.js.map