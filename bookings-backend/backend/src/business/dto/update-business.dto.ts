import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessDto } from './create-business.dto';

// Create Businnes te crea los datos obligatorios declarados en tu create Businnes y Update datos opcionales que no estan dentro

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {}