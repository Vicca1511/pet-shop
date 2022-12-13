import { Module } from '@nestjs/common';
import { OwnerService } from 'src/owner/entities/services/owner.service';
import { ownerController } from 'src/owner/owner.controller';
import { OwnerRepository } from 'src/owner/owner.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicePerformedService } from 'src/service-performed/service-performed.service';

@Module({
  controllers:[ownerController],
  providers: [ OwnerRepository, OwnerService, ServicePerformedService, PrismaService],
  exports: [OwnerService]

})
export class OwnerMOdule {}
