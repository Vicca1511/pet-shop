import { Module } from '@nestjs/common';
import { OwnerService } from 'src/owner/entities/services/owner.service';
import { ownerController } from 'src/owner/owner.controller';
import { OwnerRepository } from 'src/owner/owner.repository';


@Module({
  controllers:[ownerController],
  providers: [ OwnerRepository, OwnerService, ],
  exports: [OwnerService, ]

})
export class OwnerModule {}
