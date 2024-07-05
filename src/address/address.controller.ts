import { Controller, Get } from '@nestjs/common';
import { AddressService } from './address.service';
import { Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { CreateAddressDto } from './addressdto/createaddress';
import { UpdateAddressDto } from './addressdto/updateaddress';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}


  

