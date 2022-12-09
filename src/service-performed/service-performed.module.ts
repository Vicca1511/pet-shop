import { Module } from '@nestjs/common';
import { ServicePerformedService } from './service-performed.service';
import { ServicePerformedController } from './service-performed.controller';

@Module({
  controllers: [ServicePerformedController],
  providers: [ServicePerformedService]
})
export class ServicePerformedModule {}
