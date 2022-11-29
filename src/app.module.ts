import { Module } from '@nestjs/common';
import { ownerService } from './owner/entities/services/owner.service';
import { ownerController } from './owner/owner.controller';
import { OwnerRepository } from './owner/owner.repository';
import { DatabaseModule } from './prisma/dataBase.module';


@Module({
    imports: [DatabaseModule],
    controllers:[ownerController],
    providers:[ownerService , OwnerRepository]
})
export class AppModule {}
