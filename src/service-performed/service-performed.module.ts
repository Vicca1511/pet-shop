import { Module } from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { ServicePerformedController } from './service-performed.controller';
import { TreatmentsService } from 'src/treatments/treatments.service';

@Module({
  controllers: [ServicePerformedController],
  providers: [ServicePerformedService ,TreatmentsService]
})
export class ServicePerformedModule {}
