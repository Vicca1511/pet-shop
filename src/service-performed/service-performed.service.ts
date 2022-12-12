import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { CreateServicePerformedDto } from './dto/create-service-performed.dto';
import { UpdateServicePerformedDto } from './dto/update-service-performed.dto';
import { ServicePerformed } from './entities/service-performed.entity';

@Injectable()
export class ServicePerformedService {
  private _serviceperformed: ServicePerformed[] = []
  constructor( private readonly treatmentsService: TreatmentsService ){}
  async create(createServicePerformedDto: CreateServicePerformedDto,): Promise<ServicePerformed> {
    
    const treatment = await this.treatmentsService.findOne(createServicePerformedDto.treatmentId)
    const treatmentDuration = 60 * 1000
    const alreadyPerformed =  new ServicePerformed() 
    alreadyPerformed.id = randomUUID(),
    alreadyPerformed.ownerPet = [],
    alreadyPerformed.startDate = new Date( Date.now()),
    alreadyPerformed.endDate = new Date( Date.now() + treatmentDuration),
    alreadyPerformed.moment = new Date(Date.now()).getUTCDate().toString(),
      this._serviceperformed.push(alreadyPerformed);
      return Promise.resolve(alreadyPerformed);
      
    }
    
    
  }

 async findAll() {
    return `This action returns all servicePerformed`;
  }

 async findOne(id: number) {
    return `This action returns a #${id} servicePerformed`;
  }

   async update(id: number, updateServicePerformedDto: UpdateServicePerformedDto) {
    return `This action updates a #${id} servicePerformed`;
  }

  async remove(id: number) {
    return `This action removes a #${id} servicePerformed`;
  }


function findAll() {
  throw new Error('Function not implemented.');
}

function findOne(id: any, number: any) {
  throw new Error('Function not implemented.');
}

function update(id: any, number: any, updateServicePerformedDto: any, UpdateServicePerformedDto: typeof UpdateServicePerformedDto) {
  throw new Error('Function not implemented.');
}

function remove(id: any, number: any) {
  throw new Error('Function not implemented.');
}

