import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { OwnerService } from 'src/owner/entities/services/owner.service';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { Exception } from 'src/utils/exceptions/exceptions';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { ServicePerformed } from './entities/service-performed.entity';
import { ServicePerformedRepository } from './service-performed-repository';

@Injectable()
export class ServicePerformedService {
  constructor(
    private readonly treatmentsService: TreatmentsService,
    private readonly servicePerformedRepository: ServicePerformedRepository,
    private readonly ownerService: OwnerService,
  ) {}
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
    return await this.servicePerformedRepository.createServicePerformed(
      alreadyPerformed,
    );
  }

  async findAll() {
    return this.servicePerformedRepository.allServicesPerformed();
  }

  async findOne(id: string): Promise<ServicePerformed> {
    const serviceFinded = await this.servicePerformedRepository.servicesById(
      id,
    );
    return serviceFinded;
  }

  async update(updateServicePerformed: UpdateServicePerformedDto) {

    updateServicePerformed.ownerIds.forEach(async (id) => {
      await this.ownerService.getOwnerById(id);

    })
    const foundService = await this.servicePerformedRepository.updateServicePerformed(updateServicePerformed);
    return foundService;
  }


  async RegisterServicePerformed(servicePerformedId: string , ownerIds: string): Promise<ServicePerformed> {
    const performed = await this.findOne(servicePerformedId);
    const atNow = new Date(Date.now());
    if (atNow.getTime() > performed.endDate.getTime()) {
      throw new Exception(Exceptions.InvalidData, 'Time Expired');
    }
    await this.ownerService.getOwnerById(ownerIds)
    return await this.servicePerformedRepository.updateServicePerformed({
      id:servicePerformedId,
      ownerIds: [ownerIds],
      treatmentId:""
    })
  }

  async remove(id: string) {
    return `This action removes a #${id} servicePerformed`;
  }
}


