import { Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';

@Injectable()
export class TreatmentsService {
  async create(createTreatmentDto: CreateTreatmentDto) {
    return 'This action adds a new treatment';
  }async 

  async findAll() {
    return `This action returns all treatments`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} treatment`;
  }

  async update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    return `This action updates a #${id} treatment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} treatment`;
  }
}
