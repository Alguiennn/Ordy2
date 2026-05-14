import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@ApiTags('business')
@Controller('business')
export class BusinessController {

    // Se declara el constructor privado y se declara la variable BusinessService perteneciente a : Clase Business Service

    constructor(private readonly BusinessService: BusinessService) { }

    //Llama todos los negocios

    @Get()
    @ApiOkResponse({ description: 'Muestra todos los ID' })
    findAll() {
        return this.BusinessService.findAll();
    }

    //Busca por ID de negocio

    @Get(':id')
    @ApiOkResponse({ description: 'Busca todos los ID y te muestra el negocio' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.BusinessService.findOne(id);
    }

    //Envia la creacion del negocio

    @Post()
    @ApiCreatedResponse({ description: 'Negocio Creado' })
    create(@Body() CreateBusinessDto: CreateBusinessDto) {
        return this.BusinessService.create(CreateBusinessDto);
    }

    //Actualiza la creacion del negocio

    @Patch(':id')
    @ApiOkResponse({ description: 'Negocio Actualizado' })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() UpdateBusinessDto: UpdateBusinessDto,
    ) {
        return this.BusinessService.update(id, UpdateBusinessDto);
    }

    //Elimina por ID
    
    @Delete(':id')
    @ApiOkResponse({ description: 'Negocio Eliminado' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.BusinessService.remove(id);
    }

}