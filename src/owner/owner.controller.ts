import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Console } from 'console';
import { IOwnerEntity } from './entities/owner.entity';
import { ownerDto } from './entities/services/dto/ownerImput.dto';
import { partialOwnerDto } from './entities/services/dto/partialOwner.dto';
import { ownerService } from './entities/services/owner.service';

@Controller()
export class ownerController {
  constructor(private service: ownerService) {}

  @Get()
  async getAllOwners(): Promise<IOwnerEntity[]> {
    return this.service.getAllOwners();
  }
  @Post()
  async createOwner(
    @Body() { name, cpf, email, petEspecies, petName, role }: ownerDto,
  ): Promise<IOwnerEntity> {
    try {
      return await this.service.createOwner({
        name,
        cpf,
        email,
        petEspecies,
        petName,
        role,
      });
    } catch (error) {
      console.log(error);
    }
  }
  @Patch()
  async updateOwner(@Body() ownerData: partialOwnerDto): Promise<IOwnerEntity> {
    try {
      return await this.service.updateOwner(ownerData);
    } catch (err) {
      console.log(err);
    }
  }
}
