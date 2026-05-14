import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './business.entity';
import { CreateBusinessDto } from './dto/create-business.dto'; 
import { UpdateBusinessDto } from './dto/update-business.dto'; 



@Injectable()
export class BusinessService{
    constructor(
        @InjectRepository(Business)
        private readonly BusinessRepository: Repository<Business>,
    ) {}

    //Busca por todos los ID y los ordena de manera Ascendente

    findAll(){
        return this.BusinessRepository.find({
            order: {name: 'ASC'}
        })
    }

    //Busca una ID en especifico
    
    findOne(id: number){
        return this.BusinessRepository.findOneBy({id});
    }

    //Crea la variable, inserta y retorna la variable creada

    create(createBusinessDto: CreateBusinessDto){
        const business = this.BusinessRepository.create(createBusinessDto);
        return this.BusinessRepository.save(business);
    }

    //Actualiza primero colocando el ID y si no existe ese ID te retorna el No existe

    async update(id: number, updateBusinessDto: UpdateBusinessDto) {
    const business = await this.BusinessRepository.findOneBy({ id });

    if (!business) {
        throw new NotFoundException(`No existe el negocio con id ${id}`);
    }

    const updatedBusiness = this.BusinessRepository.merge(
        business,
        updateBusinessDto,
    );

    return this.BusinessRepository.save(updatedBusiness);
    }

    // Elimina por ID si el ID no existe te bota un mensaje 

    async remove(id: number) {
    const business = await this.BusinessRepository.findOneBy({ id });

    if (!business) {
      throw new NotFoundException(`No existe el negocio con ese id ${id}`);
    }

    await this.BusinessRepository.remove(business);

    return { message: `Negocio ${id} eliminada correctamente` };
  }

}