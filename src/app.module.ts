import { Module } from '@nestjs/common';
import { ownerService } from './owner/entities/services/owner.service';
import { ownerController } from './owner/owner.controller';


@Module({
    controllers:[ownerController],
    providers:[ownerService]
})
export class AppModule {}
