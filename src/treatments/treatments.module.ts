import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { DatabaseModule } from 'src/prisma/dataBase.module';
import { treatmentsRepository } from './treatments-repository';


@Module({
  imports:[DatabaseModule],
  controllers: [TreatmentsController],
  providers:  [treatmentsRepository, TreatmentsService]
  
})
export class TreatmentsModule {}
