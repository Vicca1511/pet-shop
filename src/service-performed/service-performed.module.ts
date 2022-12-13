import { Module } from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { ServicePerformedController } from './service-performed.controller';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { ServicePerformedRepository } from './service-performed-repository';
import { DatabaseModule } from 'src/prisma/dataBase.module';
import { treatmentsRepository } from 'src/treatments/treatments-repository';
import { OwnerRepository } from 'src/owner/owner.repository';
import { OwnerService } from 'src/owner/entities/services/owner.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ServicePerformedController],
  providers: [
    ServicePerformedRepository,
    ServicePerformedService,
    TreatmentsService,
    treatmentsRepository,
    OwnerRepository,
    OwnerService
    
  ],
})
export class ServicePerformedModule {}
