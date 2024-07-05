import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './addressdto/createaddress';
import { UpdateAddressDto } from './addressdto/updateaddress';

@Injectable()
export class AddressService {
    constructor (@InjectRepository (Address) private addressRepository: Repository<Address>) {};

    findAll(): Promise<Address[]>{
        return this.addressRepository.find();
    }

    create(createAddressDto: CreateAddressDto) : Promise<Address> {
        return this.addressRepository.save(createAddressDto);
    }

    async findOne(id: number) {
        return await this.addressRepository.findOne({
            where : {id}
        });
    }
    
    async update(id: number, updateAddressDto: UpdateAddressDto) {
        const user = await this.findOne(id);
        if(!user) {throw new NotFoundException}
        Object.assign(user, updateAddressDto)
        return this.addressRepository.save(user);
    }
    
    async remove(id: number) {
        const user = await this.findOne(id);
        if(!user) {throw new NotFoundException}
        return this.addressRepository.delete(user);
    }
}