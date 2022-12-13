import { Module } from '@nestjs/common';
import { OwnerService} from './owner/entities/services/owner.service';
import { ownerController } from './owner/owner.controller';
import { OwnerRepository } from './owner/owner.repository';
import { DatabaseModule } from './prisma/dataBase.module';
import { ServicePerformedModule } from './service-performed/service-performed.module';
import { TreatmentsModule } from './treatments/treatments.module';

@Module({
  imports: [DatabaseModule, ServicePerformedModule, TreatmentsModule, ],
  controllers: [ownerController],
  providers: [OwnerService, OwnerRepository,],
})
export class AppModule {}
