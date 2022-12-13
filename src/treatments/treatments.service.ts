import { Injectable } from '@nestjs/common';
import { Treatment } from '@prisma/client';
import { randomUUID } from 'crypto';
import { Exception } from 'src/utils/exceptions/exceptions';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { treatmentsRepository } from './treatments-repository';

@Injectable()
export class TreatmentsService {
  constructor(private readonly treatmentsRepository: treatmentsRepository) {}

  async create(createTreatmentDto: CreateTreatmentDto): Promise<Treatment> {
    const id = randomUUID();
    return this.treatmentsRepository.createTreatment(createTreatmentDto, id);
  }

  async findAll(): Promise<Treatment[]> {
    return await this.treatmentsRepository.findAllTreatment();
  }

  async findOne(id: string) {
    return await this.treatmentsRepository.findTreatmentById(id);
  }

  async update(
    id: string,
    updateTreatmentDto: UpdateTreatmentDto,
  ): Promise<Treatment> {
    if (!updateTreatmentDto) {
      throw new Exception(Exceptions.InvalidData, 'There is no reference!');
    }

    return await this.treatmentsRepository.updateTreatment(updateTreatmentDto);
  }

  async remove(id: string): Promise<string> {
    await this.treatmentsRepository.deleteTreatment(id);
    return "Deleted succ"
  }
}
