import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './userdto/createuser';
import { Address } from 'src/address/address.entity';
import { UpdateUserDto } from './userdto/updateuser';

@Injectable()
export class UserService {
    constructor (@InjectRepository (User) private userRepository: Repository<User>) {};

    findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    create(createUserDto: CreateUserDto) : Promise<User> {
        return this.userRepository.save(createUserDto);
    }

    async findOne(id: number) {
        return await this.userRepository.findOne({
            where : {id}
        });
    }
    
    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.findOne(id);
        if(!user) {throw new NotFoundException}
        Object.assign(user, updateUserDto)
        return this.userRepository.save(user);
    }
    
    async remove(id: number) {
        const user = await this.findOne(id);
        if(!user) {throw new NotFoundException}
        return this.userRepository.delete(user);
    }
}