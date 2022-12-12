import { Module } from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { ServicePerformedController } from './service-performed.controller';
import { TreatmentsService } from 'src/treatments/treatments.service';
import { ServicePerformedRepository } from './service-performed-repository';
import { OwnerRepository } from 'src/owner/owner.repository';
import { OwnerService } from 'src/owner/entities/services/owner.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { DatabaseModule } from 'src/prisma/dataBase.module';


@Module({
  imports: [DatabaseModule] ,
  controllers: [ServicePerformedController],
  providers: [ServicePerformedService, TreatmentsService,  ServicePerformedRepository, OwnerService , OwnerRepository , PrismaService ],

  
  
})
export class ServicePerformedModule {}
