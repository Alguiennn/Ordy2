import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBusinessDto {

// Se declara segun tu tabla la creacion del dato

@ApiProperty({example: "Consultoria"})
@IsString()
name: string;
}