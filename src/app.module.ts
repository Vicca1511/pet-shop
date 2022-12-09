import { Module } from '@nestjs/common';
import { ownerService } from './owner/entities/services/owner.service';
import { ownerController } from './owner/owner.controller';
import { OwnerRepository } from './owner/owner.repository';
import { DatabaseModule } from './prisma/dataBase.module';
import { EmployeeModule } from './employee/employee.module';
import { ServicePerformedModule } from './service-performed/service-performed.module';
import { ServicePerformedModule } from './service-performed/service-performed.module';


@Module({
    imports: [DatabaseModule, EmployeeModule, ServicePerformedModule],
    controllers:[ownerController],
    providers:[ownerService , OwnerRepository]
})
export class AppModule {}
