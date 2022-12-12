import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { RegisterOnPerformedDto } from './dto/register-on-performed.dto';
import { handleException } from 'src/utils/exceptions/exceptionsHelper';

@Controller('service-performed')
export class ServicePerformedController {
  constructor(private readonly servicePerformedService: ServicePerformedService) {}

  @Post()
  create(@Body() createServicePerformedDto: CreateServicePerformedDto) {
    return this.servicePerformedService.create(createServicePerformedDto);
  }

  @Post('registerPerformed')
   async registerOnPerformed(@Body() { servicePerformedId, ownerId }: RegisterOnPerformedDto) {
    try {
      return this.servicePerformedService.RegisterServicePerformed(servicePerformedId)
    } catch(error) {
      handleException(error);
    }
  }

  @Get()
  findAll() {
    return this.servicePerformedService.findAll();
  }

  @Get(':id')
  findOne( id: string) {
    return this.servicePerformedService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicePerformedDto: UpdateServicePerformedDto) {
    return this.servicePerformedService.update(id, updateServicePerformedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicePerformedService.remove(id);
  }
}
