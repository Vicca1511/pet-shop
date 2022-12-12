import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { RegisterOnPerformedDto } from './dto/register-on-performed.dto';
import { handleException } from 'src/utils/exceptions/exceptionsHelper';
import { ownerDto } from 'src/owner/entities/services/dto/ownerImput.dto';

@Controller('service-performed')
export class ServicePerformedController {
  constructor(
    private readonly servicePerformedService: ServicePerformedService,
  ) {}

  @Post()
  create(@Body() createServicePerformedDto: CreateServicePerformedDto) {
    return this.servicePerformedService.create(createServicePerformedDto);
  }

  @Post('registerPerformed')
  async registerOnPerformed(
    @Body() { servicePerformedId, ownerId}: RegisterOnPerformedDto,
  ) {
    try {
      return this.servicePerformedService.RegisterServicePerformed(
        servicePerformedId,
        ownerId[0] ,
        
      );
    } catch (err) {
      handleException(err);
    }
  }

  @Get()
  findAll() {
    return this.servicePerformedService.findAll();
  }

  @Get(':id')
  findOne(id: string) {
    return this.servicePerformedService.findOne(id);
  }

  @Patch(':id')
  update(
   
    @Body() updateServicePerformedDto: UpdateServicePerformedDto,
  ) {
    return this.servicePerformedService.update(updateServicePerformedDto);
  }
}

