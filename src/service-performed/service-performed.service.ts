import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { Exception } from 'src/utils/exceptions/exceptions';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { ServicePerformed } from './entities/service-performed.entity';

@Injectable()
export class ServicePerformedService {
  private _serviceperformed: ServicePerformed[] = [];
  constructor(private readonly treatmentsService: TreatmentsService) {}
  async create(
    createServicePerformedDto: CreateServicePerformedDto,
  ): Promise<ServicePerformed> {
    const treatment = await this.treatmentsService.findOne(
      createServicePerformedDto.treatmentId,
    );
    const treatmentDuration = 60 * 1000;
    const alreadyPerformed: ServicePerformed = {
      ...createServicePerformedDto,

      id: randomUUID(),
      ownerPet: [],
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + treatmentDuration),
      moment: new Date(Date.now()).getUTCDate().toString(),
    };
    this._serviceperformed.push(alreadyPerformed);
    return Promise.resolve(alreadyPerformed);
  }

  async findAll() {
    return `This action returns all servicePerformed`;
  }

  async findOne(id: string) {
    const alreadyPerformedList = this._serviceperformed.find(
      (servicePerformed) => servicePerformed.id === id,
    );
    return alreadyPerformedList;
  }

  async update(
    id: string,
    updateServicePerformedDto: UpdateServicePerformedDto,
  ) {
    return `This action updates a #${id} servicePerformed`;
  }

  async RegisterServicePerformed(servicePerformedId: string): Promise<string> {
    const performed = await this.findOne(servicePerformedId);
    const atNow = new Date(Date.now());
    if (atNow.getTime() > performed.endDate.getTime()) {
      throw new Exception(Exceptions.InvalidData, 'Time Expired');
    }
    return ' Service Performed';
  }

  async remove(id: string) {
    return `This action removes a #${id} servicePerformed`;
  }
}

function findAll() {
  throw new Error('Function not implemented.');
}

function findOne(id: string) {
  throw new Error('Function not implemented.');
}

function update(
  id: string,
  updateServicePerformedDto: any,
  UpdateServicePerformedDto: UpdateServicePerformedDto,
) {
  throw new Error('Function not implemented.');
}

function remove(id: string) {
  throw new Error('Function not implemented.');
}
