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
import { handleException } from 'src/utils/exceptions/exceptionsHelper';
import { IHttpResponse } from 'src/utils/IHttpResponse';
import { IOwnerEntity } from './entities/owner.entity';
import { ownerDto } from './entities/services/dto/ownerImput.dto';
import { partialOwnerDto } from './entities/services/dto/partialOwner.dto';
import { ownerService } from './entities/services/owner.service';

@Controller('owner')
export class ownerController {
  constructor(private service: ownerService) {}

  @Get()
  async getAllOwners(): Promise<IOwnerEntity[]> {
    return await this.service.getAllOwners();
  }

  @Get(':id')
  async getOwnerById(@Param('id') userId: string): Promise<IOwnerEntity> {
    try {
      return await this.service.getOwnerById(userId);
    } catch (err) {
      handleException(err);
    }
  }

  @Post()
  async createOwner(
    @Body() { name, cpf, email, password, petName, role }: ownerDto,
  ): Promise<IHttpResponse<IOwnerEntity | null>> {
    try {
      const result = await this.service.createOwner({
        name,
        cpf,
        email,
        password,
        petName,
        role,
      });
      return { body: result, statusCode: 200, message: 'Owner created!' };
    } catch (err) {
      handleException(err);
      return { body: null, statusCode: 400, message: 'Owner created Badly!' };
    }
  }
  @Patch()
  async updateOwner(@Body() ownerData: partialOwnerDto): Promise<IOwnerEntity> {
    try {
      return await this.service.updateOwner(ownerData);
    } catch (err) {
      handleException(err);
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
