import { Injectable } from '@nestjs/common';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';

@Injectable()
export class ServicePerformedService {
  create(createServicePerformedDto: CreateServicePerformedDto) {
    return 'This action adds a new servicePerformed';
  }

  findAll() {
    return `This action returns all servicePerformed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicePerformed`;
  }

  update(id: number, updateServicePerformedDto: UpdateServicePerformedDto) {
    return `This action updates a #${id} servicePerformed`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicePerformed`;
  }
}
