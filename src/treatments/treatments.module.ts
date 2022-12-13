import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { DatabaseModule } from 'src/prisma/dataBase.module';
import { treatmentsRepository } from './treatments-repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[DatabaseModule],
  controllers: [TreatmentsController],
  providers: [TreatmentsService,treatmentsRepository, PrismaService],
  
})
export class TreatmentsModule {}
