import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  async getOwnerById(@Param('id') userId: string): Promise<IOwnerEntity> {
    try {
      return await this.service.getOwnerById(userId);
    } catch (err) {
      console.log(err);
    }
  }

  @Post()
  async createOwner(
    @Body() { name, cpf, email, password, petName, role }: ownerDto,
  ): Promise<IOwnerEntity> {
    try {
      return await this.service.createOwner({
        name,
        cpf,
        email,
        password,
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

  @Delete(':id')
  async deleteOwner(@Param() ownerId: string): Promise<String> {
    try {
      const ownerIsDeleted = await this.service.deleteOwnerById(ownerId);
      if (ownerIsDeleted) {
        return 'Owner deleted successfully';
      } else {
        return 'Owner not found';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
